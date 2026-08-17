import prisma from '@@/lib/prisma'
import { getServerSession } from '#auth'

/**
 * Не безопасно
 */
export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401 })
  }
  const userModel = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    include: {
      sessionOnInstances: true,
    },
  })

  if (!userModel) {
    throw createError({ statusCode: 400 })
  }

  if (userModel.sessionOnInstances[0]?.sessionToken) {
    return userModel.sessionOnInstances[0]?.sessionToken
  }

  const result = await $fetch<unknown>('http://192.168.0.6:4000/api/reg', {
    method: 'POST',
    body: userModel,
  })

  if (result?.account && result?.account?.access_token && typeof result?.account?.access_token === 'string') {
    const sessionToken: string = result?.account?.access_token

    await prisma.sessionOnInstance.create({
      data: {
        sessionToken,
        userId: userModel.id,
      },
    })

    return sessionToken
  }

  return result
})
