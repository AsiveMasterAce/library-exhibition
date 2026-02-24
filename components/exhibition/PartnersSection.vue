<template>
  <section id="partners" class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-serif font-bold text-[#1f2d16]">Partners</h2>
        <p class="mt-2 text-[#1f2d16]/80">We acknowledge our partners and collaborators.</p>
      </div>

      <div class="partner-marquee overflow-hidden relative w-full h-48">
        <div class="marquee-track flex items-center gap-8" role="list">
          <template v-for="(p, i) in extendedPartners" :key="`${p.name}-${i}`">
            <div class="partner-item min-w-[160px]" role="listitem">
              <div class="partner-link" :aria-label="p.name" tabindex="0">
                <img :src="p.logo" :alt="p.name" class="partner-logo green-tint" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

type Partner = {
  name: string
  logo: string
  href?: string
}

const partners: Partner[] = [
  { name: 'Department of Sport, Arts and Culture', logo: '/images/logos/sports_and_culture.png' },
  { name: 'South African Library for the Blind', logo: '/images/logos/library.png' },
  { name: 'University of Fort Hare', logo: '/images/logos/ufh.svg' },
  { name: 'Nelson Mandela University', logo: '/images/logos/nmu.png' },
  { name: 'Walter Sisulu University', logo: '/images/logos/wsu.png' }
]

const extendedPartners = ref<Partner[]>([])

onMounted(() => {
  const containerWidth = window.innerWidth
  let repeats = 1
  let tempArray = [...partners]

  // Keep duplicating until the track width > container width
  while ((tempArray.length * 180) < containerWidth * 2) {
    tempArray = [...tempArray, ...partners]
    repeats++
  }
  extendedPartners.value = tempArray
})
</script>

<style scoped>
.partner-marquee {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 12rem;
}

/* Marquee track */
.marquee-track {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  animation: marquee 25s linear infinite;
}

.marquee-track:hover,
.marquee-track:focus-within {
  animation-play-state: paused;
}

/* Partner items */
.partner-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
}

.partner-link {
  display: inline-block;
  outline: none;
}

/* Logos */
.partner-logo {
  max-height: 160px;
  display: block;
  filter: grayscale(100%) contrast(0.95) opacity(0.95);
  transition: filter 0.28s ease, transform 0.28s ease, opacity 0.28s ease;
}

.partner-link:hover .partner-logo,
.partner-link:focus .partner-logo {
  filter: none;
  transform: translateY(-4px) scale(1.04);
  opacity: 1;
}

.partner-link:focus {
  box-shadow: 0 0 0 4px rgba(34,197,94,0.12);
  border-radius: 6px;
}

.partner-logo.green-tint {
  filter: grayscale(100%) sepia(18%) hue-rotate(70deg) saturate(28%);
}

/* Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>