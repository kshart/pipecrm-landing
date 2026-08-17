import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@@/lib/prisma'
import type { AuthOptions } from 'next-auth'
import YandexProvider from 'next-auth/providers/yandex'
import GoogleProvider from 'next-auth/providers/google'

interface YandexProviderModule {
  default: typeof YandexProvider
}
interface GoogleProviderModule {
  default: typeof GoogleProvider
}

const providers = [
  (YandexProvider as unknown as YandexProviderModule).default({
    clientId: String(process.env.YANDEX_CLIENT_ID),
    clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
    // authorization: { params: { scope: "login:info+login:email+login:avatar" } }
  }),
  (GoogleProvider as unknown as GoogleProviderModule).default({
    clientId: String(process.env.GOOGLE_CLIENT_ID),
    clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
  }),
] as AuthOptions['providers']

const adapter = PrismaAdapter(prisma) as AuthOptions['adapter']

export default NuxtAuthHandler({
  providers,
  secret: useRuntimeConfig().authSecret,
  adapter,
  session: process.env.NODE_ENV === 'development'
    ? {
        strategy: 'jwt',
        maxAge: 3000,
      }
    : undefined,
  pages: {
    signIn: '/',
    signOut: '/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/u',
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      }
    },
  },
})
