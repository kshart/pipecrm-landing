<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { TableMeta, Row } from '@tanstack/vue-table'

type Project = {
  id: string
  date: string
  status: 'paid' | 'failed' | 'refunded'
  email: string
  amount: number
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: {
      class: {
        th: 'text-center font-semibold',
        td: 'text-center font-mono',
      },
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    meta: {
      class: {
        th: 'text-center font-semibold',
        td: 'text-center font-mono',
      },
    },
  },
  // {
  //   accessorKey: 'status',
  //   header: 'Status',
  //   meta: {
  //     class: {
  //       th: 'text-center',
  //       td: 'text-center',
  //     },
  //   },
  //   cell: ({ row }) => {
  //     const status = row.getValue('status') as string
  //     const colorMap = {
  //       paid: 'text-success',
  //       failed: 'text-error',
  //       refunded: 'text-warning',
  //     }
  //     return h(
  //       'span',
  //       { class: `font-semibold capitalize ${colorMap[status as keyof typeof colorMap]}` },
  //       status,
  //     )
  //   },
  // },
  // {
  //   accessorKey: 'email',
  //   header: 'Email',
  //   meta: {
  //     class: {
  //       th: 'text-left',
  //       td: 'text-left',
  //     },
  //   },
  // },
  // {
  //   accessorKey: 'amount',
  //   header: 'Amount',
  //   meta: {
  //     class: {
  //       th: 'text-right font-bold text-primary',
  //       td: 'text-right font-mono',
  //     },
  //   },
  //   cell: ({ row }) => {
  //     const amount = Number.parseFloat(row.getValue('amount'))
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount)
  //     return h('span', { class: 'font-semibold text-success' }, formatted)
  //   },
  // },
]
const { data, status, error, refresh, clear } = await useFetch('/api/project')
</script>

<template>
  <UContainer>
    Кабинет с проектами для рега
    <UTable
      :data="data"
      :columns="columns"
      class="flex-1"
    />
  </UContainer>
</template>
