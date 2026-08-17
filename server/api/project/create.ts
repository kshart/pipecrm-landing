import prisma from '@@/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  // const uuid = String(event.context.params?.uuid)
  // const data = await readBody<CardUpdateData>(event)

  if (!session?.user) {
    throw createError({ statusCode: 401 })
  }

  const projectsCount = await prisma.project.count({
    where: {
      authorId: session.user.id,
    },
  })

  if (projectsCount > 0) {
    throw createError({ statusCode: 403 })
  }

  return await prisma.project.create({
    data: {
      authorId: session.user.id,
    },
    include: {
      columns: true,
    },
  })
  return await cardMe.update(card, data, session.user as User)
})
