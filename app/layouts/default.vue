<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { getSession } = useAuth()
const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started'),
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components'),
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/kshart/pipecrm/releases',
  target: '_blank',
}])

const footerItems: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank',
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank',
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
]

const { user } = await getSession() || {}
</script>

<template>
  <UPage>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UUser
          v-if="user"
          :name="user.name"
          :avatar="{ src: user.image }"
          to="/u"
        />
        <UColorModeButton />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu
        :items="footerItems"
        variant="link"
      />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UPage>
</template>
