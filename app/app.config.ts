export default defineAppConfig({
  ui: {
    button: {
      base: (classList: string) => classList.includes('bg-inverted') ? classList : classList.replace('text-inverted', 'light:text-inverted'),
    },
  },
})
