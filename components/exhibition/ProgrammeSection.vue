<template>
  <section id="programme" class="py-20 px-4 bg-[#c2cd4bcf]/20 rounded-lg relative overflow-hidden">
    <div class="max-w-5xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 break-words leading-tight">
          Expo Programme 
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Overview of the three-day experience. Scan the QR code or download the full programme.
        </p>
      </div>

      <!-- Programme Cards -->
      <div ref="spotlightContainer" data-spotlight class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-10">
        <div
          v-for="day in days"
          :key="day.title"
          class="relative p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          :style="{ '--glow-color': day.glow }"
        >
          <div class="relative z-10">
            <h3 class="font-semibold text-lg sm:text-xl mb-2">{{ day.title }}</h3>
            <p class="text-sm sm:text-base text-muted-foreground">{{ day.description }}</p>
          </div>
          <div class="absolute inset-0 glow-layer pointer-events-none"></div>
        </div>
      </div>

      <!-- Buttons + QR -->
      <div class="flex flex-col sm:flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8">
        <!-- Buttons stacked on mobile -->
        <div class="flex flex-col sm:flex-col md:flex-row gap-4 w-full md:w-auto">
          <a
            :href="programmeUrl"
            download
            class="w-full md:w-auto text-center px-6 py-3 rounded-lg font-semibold bg-[#c2cd4b] text-[#1f2d16] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            Download Programme (PDF)
          </a>
          <a
            :href="programmeUrl"
            target="_blank"
            class="w-full md:w-auto text-center px-6 py-3 rounded-lg font-semibold border border-[#c2cd4b] text-[#4a5b1a] transition-all duration-300 hover:bg-[#c2cd4b]/20"
          >
            Open Programme
          </a>
        </div>

        <!-- QR code -->
        <aside class="text-center mt-4 md:mt-0">
          <img :src="qrSrc" alt="QR code to programme" class="w-28 sm:w-36 mx-auto mb-3 rounded-lg" />
          <div class="text-xs text-muted-foreground">Scan for full programme</div>
        </aside>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRuntimeConfig } from '#app'

const programmeUrl = `${useRuntimeConfig().public.baseURL || ''}/programme.pdf`

const qrSrc = computed(() =>
  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(programmeUrl)}`
)

const days = ref([
  {
    title: 'Day 1',
    description: 'Envisioning the Future — Keynotes, Panels, Breakaways, Tech Showcase',
    glow: 'rgba(99,102,241,0.35)',
  },
  {
    title: 'Day 2',
    description: 'Building a Collaborative Future — Keynotes, Panels, Breakaways, Tech Showcase',
    glow: 'rgba(16,185,129,0.35)',
  },
  {
    title: 'Day 3',
    description: 'Crafting Libraries of the Future — Keynotes, Panels, Breakaways, Tech Showcase',
    glow: 'rgba(234,179,8,0.35)',
  },
])

const spotlightContainer = ref<HTMLElement | null>(null)

class Spotlight {
  container: HTMLElement
  cards: HTMLElement[]

  constructor(container: HTMLElement) {
    this.container = container
    this.cards = Array.from(container.children) as HTMLElement[]
    this.init()
  }

  init() {
    this.container.addEventListener('pointermove', this.handleMove)
    this.container.addEventListener('pointerleave', this.handleLeave)
  }

  handleMove = (event: PointerEvent) => {
    this.cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  handleLeave = () => {
    this.cards.forEach((card) => {
      card.style.setProperty('--mouse-x', `50%`)
      card.style.setProperty('--mouse-y', `50%`)
    })
  }

  destroy() {
    this.container.removeEventListener('pointermove', this.handleMove)
    this.container.removeEventListener('pointerleave', this.handleLeave)
  }
}

let spotlight: Spotlight | null = null

onMounted(async () => {
  await nextTick()
  if (spotlightContainer.value) spotlight = new Spotlight(spotlightContainer.value)
})

onUnmounted(() => spotlight?.destroy())
</script>

<style scoped>
#programme {
  position: relative;
  overflow: hidden;
}

/* Top-right contour circle */
#programme::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(28, 66, 20, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

/* Bottom-left contour circle */
#programme::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(28, 66, 20, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

[data-spotlight] > div {
  --mouse-x: 50%;
  --mouse-y: 50%;
  --glow-color: rgba(255, 255, 255, 0.25);
  position: relative;
}

/* Glow effect */
.glow-layer {
  background: radial-gradient(
    200px circle at var(--mouse-x) var(--mouse-y),
    var(--glow-color),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

[data-spotlight] > div:hover .glow-layer {
  opacity: 1;
}

@media (max-width: 640px) {
  #programme::before {
    top: -30px;
    right: -30px;
    width: 180px;
    height: 180px;
  }
  #programme::after {
    bottom: -30px;
    left: -30px;
    width: 180px;
    height: 180px;
  }

  .glow-layer {
    background: radial-gradient(
      120px circle at var(--mouse-x) var(--mouse-y),
      var(--glow-color),
      transparent 60%
    );
  }

  [data-spotlight] > div {
    border-radius: 0.75rem;
  }
}
</style>