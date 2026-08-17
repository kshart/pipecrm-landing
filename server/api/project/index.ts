import prisma from '@@/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) {
    throw createError({ statusCode: 401 })
  }

  return await prisma.project.findMany({
    where: {
      authorId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
})
