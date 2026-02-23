<template>
  <section class="w-full px-4 py-8">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto">
      <div class="grid gap-4">
        <div v-for="n in [1, 2, 3]" :key="n">
          <img 
            :src="getPosterSrc(n)" 
            :alt="`Poster ${n}`"
            class="h-auto max-w-full rounded-lg object-cover object-center shadow-lg hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div v-for="n in [4, 5, 6]" :key="n">
          <img 
            :src="getPosterSrc(n)" 
            :alt="`Poster ${n}`"
            class="h-auto max-w-full rounded-lg object-cover object-center shadow-lg hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
      <div class="grid gap-4 hidden md:grid">
        <div v-for="n in [1, 3, 5]" :key="`alt-${n}`">
          <img 
            :src="getPosterSrc(n)" 
            :alt="`Poster ${n}`"
            class="h-auto max-w-full rounded-lg object-cover object-center shadow-lg hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
      <div class="grid gap-4 hidden md:grid">
        <div v-for="n in [2, 4, 6]" :key="`alt-${n}`">
          <img 
            :src="getPosterSrc(n)" 
            :alt="`Poster ${n}`"
            class="h-auto max-w-full rounded-lg object-cover object-center shadow-lg hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function getPosterSrc(n: number): string {
  return `/images/posters/poster${n}.jpg`;
}
</script>