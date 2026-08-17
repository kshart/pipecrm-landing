<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const route = useRoute()
const loginModalVisible = ref(route.hash === '#login')

const links = ref<ButtonProps[]>([
  {
    label: 'Get started',
    onClick: () => loginModalVisible.value = true,
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Learn more',
    to: '/docs/getting-started/theme/design-system',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageBody>
    <UPageHero
      title="Межгалактический хаос под контролем"
      description="Собери всех уёбков в одном месте и пошли их нахуй."
      :links="links"
    />
    <UPricingPlan
      title="Solo"
      description="For bootstrappers and indie hackers."
      price="$0"
      :features="[
        'One developer',
        'Unlimited projects',
        'Access to GitHub repository',
        'Unlimited patch & minor updates',
        'Lifetime access',
      ]"
    />
    <UModal v-model:open="loginModalVisible">
      <template #content>
        <LoginModal />
      </template>
    </UModal>
  </UPageBody>
</template>
