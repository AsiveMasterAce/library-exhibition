<template>
  <nav class="text-[var(--lime-green)] py-6 px-8 flex items-center justify-between sticky top-0 z-50 bg-white">
    <div class="flex items-center">
      <a href="/">
        <img src="/images/logos/dsrac.png" alt="Sports and Culture Logo" class="h-10 w-auto mr-4" />
      </a>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink
        to="/register"
        class="bg-[#77bc44]/30 text-[#345222] px-4 py-2 rounded-lg font-semibold  transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
      >
        Register
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav {
  border-bottom: 1px solid var(--cream-yellow);
}
</style>
