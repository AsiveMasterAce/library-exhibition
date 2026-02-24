<template>
  <section class="w-full py-16 px-4 relative overflow-hidden  rounded-lg">

    <!-- Header -->
    <h2 class="font-bold text-3xl md:text-4xl mb-4 text-center text-[#1f2d16]">Gallery & Posters</h2>
    <p class="text-center max-w-2xl mx-auto mb-12 text-[#1f2d16]/80">
      Browse featured posters and highlights. Click an image to view details and download high-res files.
    </p>

    <!-- Poster Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="poster in posters"
        :key="poster.id"
        class="relative rounded-xl overflow-hidden bg-white/5 border border-[#c2cd4b]/10 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
      >
        <img
          :src="poster.src"
          :alt="poster.title"
          class="w-full h-56 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="openModal(poster.id)"
        />
        <!-- Gradient overlay -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f2d16]/90 to-transparent p-4">
          <h3 class="text-[#fffceb] font-semibold text-lg">{{ poster.title }}</h3>
          <p class="text-[#fffdf7]/80 text-sm">{{ poster.exhibitor }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalOpen"
      class="fixed inset-0 bg-[#1f2d16]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        class="relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden bg-[#1f2d16]/90 shadow-2xl transform scale-95 animate-scaleIn"
      >
        <img
          :src="currentPoster.src"
          :alt="currentPoster.title"
          class="w-full h-[60vh] object-contain bg-[#1f2d16]/90"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f2d16]/80 to-transparent p-6">
          <h3 class="text-[#fffceb] text-2xl font-bold">{{ currentPoster.title }}</h3>
          <p class="text-[#c2fffcebcd4b]/80 mb-2">{{ currentPoster.exhibitor }} — {{ currentPoster.year }}</p>
          <p class="text-[#fffceb]/90">{{ currentPoster.description }}</p>
          <div class="mt-4">
            <a
              :href="currentPoster.highres"
              target="_blank"
              class="inline-block bg-[#c2cd4b] text-[#1f2d16] px-4 py-2 rounded hover:bg-[#b0b73b]/90 transition"
            >
              Download High‑Res
            </a>
          </div>
        </div>
      </div>
      <button
        @click="closeModal"
        class="absolute top-6 right-6 text-[#c2cd4b] text-3xl font-bold hover:text-opacity-70 transition"
      >&times;</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const modalOpen = ref(false)
const modalPosterId = ref<number | null>(null)

const posters = [
  {
    id: 1,
    title: 'Provincial SALW Poster 2026',
    exhibitor: 'Provincial SALW',
    year: 2026,
    src: '/images/posters/Provincial_SALW_Poster_2026.jpg',
    highres: '/images/posters/Provincial_SALW_Poster_2026.jpg',
    description: 'Provincial SALW Poster 2026 highlighting awareness and engagement.'
  },
  // {
  //   id: 2,
  //   title: 'Digital Gateways',
  //   exhibitor: 'Tech for Good',
  //   year: 2026,
  //   src: '/images/posters/poster2.svg',
  //   highres: '/images/posters/poster2.svg',
  //   description: 'Connecting communities with technology.'
  // },
  // {
  //   id: 3,
  //   title: 'Preserve & Share',
  //   exhibitor: 'Heritage Trust',
  //   year: 2024,
  //   src: '/images/posters/poster3.svg',
  //   highres: '/images/posters/poster3.svg',
  //   description: 'Local heritage in the digital age.'
  // },
  // {
  //   id: 4,
  //   title: 'Lifelong Learning',
  //   exhibitor: 'EduNet',
  //   year: 2026,
  //   src: '/images/posters/poster4.svg',
  //   highres: '/images/posters/poster4.svg',
  //   description: 'Learning pathways for every age.'
  // },
  // // add more posters as needed...
]

const currentPoster = computed(() => posters.find(p => p.id === modalPosterId.value) || posters[0])

function openModal(id: number) {
  modalPosterId.value = id
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
  modalPosterId.value = null
}
</script>

<style scoped>
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-scaleIn {
  animation: scaleIn 0.25s ease-out forwards;
}
</style>