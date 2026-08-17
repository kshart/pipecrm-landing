<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
})
const { getSession } = useAuth()
const route = useRoute()

const instanceHost = String(route.query.instanceHost || '')
if (!instanceHost) {
  throw createError('Чтозахост?')
}
const { user } = await getSession() || {}

if (!user) {
  await navigateTo('/#login', { external: true })
} else {
  const password = await $fetch('/api/send-reg', { method: 'POST' })

  await navigateTo(`${instanceHost}/auth?username=${user?.email}&password=${password}`, { external: true })
}
</script>

<template>
  <div>
  </div>
</template>
