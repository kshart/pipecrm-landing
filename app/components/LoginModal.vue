<script lang="ts" setup>
const { signIn, getProviders, status } = useAuth()
const providers = await getProviders()
</script>

<template>
  <div>
    <pre>{{ status }}</pre>
    <pre>{{ providers }}</pre>

    <UButton
      v-for="provider of providers"
      :key="provider?.id"
      @click="signIn(provider?.id, {
        callbackUrl: provider?.callbackUrl,
      })"
    >
      Sign in with {{ provider?.name }}
    </UButton>
  </div>
</template>
