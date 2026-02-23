<template>
  <section class="py-12 px-4">
    <h2 class="font-serif text-2xl md:text-3xl mb-6 text-center text-[var(--lime-green)]">Partners & Sponsors</h2>
    <div class="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
      <div v-for="s in sponsors" :key="s.id" class="flex flex-col items-center justify-center p-4 bg-dark rounded-lg border border-gold/10 gap-3">
        <div v-if="s.logo">
          <img :src="s.logo" :alt="s.name" class="max-h-12 object-contain" />
        </div>
        <div v-else class="w-24 h-12 bg-gold/10 flex items-center justify-center rounded">{{ s.name }}</div>
        <button class="btn-ghost">Learn More</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sponsors = [
  { id: 1, name: 'City Library', logo: '/images/sponsors/logo-placeholder.svg' },
  { id: 2, name: 'Tech for Good', logo: '/images/sponsors/logo-placeholder.svg' },
  { id: 3, name: 'Heritage Trust', logo: '/images/sponsors/logo-placeholder.svg' },
  { id: 4, name: 'EduNet', logo: '/images/sponsors/logo-placeholder.svg' },
];
</script>
