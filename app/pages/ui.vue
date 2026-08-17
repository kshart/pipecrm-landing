<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
])
</script>

<template>
  <UContainer>
    Кабинет с проектами для рега
    <USeparator />
    <UAvatar src="https://github.com/benjamincanac.png" />
    <USeparator />
    <UCard
      v-for="bg of ['bg-default border border-default', 'bg-muted border border-muted', 'bg-elevated', 'bg-accented', 'bg-inverted text-inverted']"
      :key="bg"
      :class="bg"
      class="mb-4"
    >
      <template #header>
        <h1>{{ bg }}</h1>
      </template>
      <template
        v-for="color of ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']"
        :key="color"
      >
        <UButton :color="color">
          {{ color }}
        </UButton>
      </template>
    </UCard>
    <USeparator />
    <UBanner
      icon="i-lucide-info"
      title="This is a banner with an icon."
    />
    <USeparator />

    <UProgress animation="swing" />
    <USeparator />
    <UStepper :items="items" />
  </UContainer>
</template>
