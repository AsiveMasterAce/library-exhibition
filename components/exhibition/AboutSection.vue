<template>
  <section id="about" class="py-16 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-serif font-bold mb-4">
        About Libraries of the Future Expo 2026
      </h2>
      <p class="mb-6 text-lg">
        Background, history, theme, purpose & objectives — exploring digital inclusion, knowledge preservation, community empowerment, and advocacy & partnerships.
      </p>

      <div ref="spotlightContainer" data-spotlight class="grid gap-4 md:grid-cols-2">
        <div
          v-for="(card, idx) in cards"
          :key="card.title"
          :class="[card.bg, 'p-4 rounded-lg cursor-pointer relative overflow-hidden transition-transform duration-300 hover:-translate-y-1']"
          :style="{ '--glow-color': card.glow }"
          @click="toggle(idx)"
          @keydown.enter.prevent="toggle(idx)"
          role="button"
          tabindex="0"
          :aria-expanded="expanded[idx] ? 'true' : 'false'"
        >
          <!-- Content -->
          <div class="flex items-start gap-3 relative z-10">
            <div :class="['p-2 rounded-md', card.iconBg]">
              <span v-html="card.icon" class="w-6 h-6 block text-current"></span>
            </div>
            <div class="flex-1 text-left">
              <h3 class="font-semibold mb-1 text-lg">{{ card.title }}</h3>
              <p class="text-sm text-gray-700 dark:text-gray-200">
                {{ card.summary }}
              </p>
            </div>
          </div>

          <transition name="fade-scale">
            <div
              v-show="expanded[idx]"
              class="mt-3 text-sm text-left text-gray-700 dark:text-gray-200 relative z-10"
            >
              {{ card.details }}
            </div>
          </transition>

          <!-- Pattern Overlay -->
          <div
            class="absolute inset-0 pointer-events-none pattern-layer"
            :style="{
              backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(card.pattern)}')`
            }"
          ></div>

          <!-- Glow Layer -->
          <div class="absolute inset-0 pointer-events-none glow-layer"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface Card {
  title: string
  summary: string
  details: string
  bg: string
  iconBg: string
  icon: string
  pattern: string
  glow: string
}

const cards = ref<Card[]>([
  {
    title: 'Digital Inclusion',
    summary: 'Bridging the digital divide through access, skills and connectivity.',
    details: 'Workshops, device lending, free connectivity pilots and skills clinics to ensure no one is left behind.',
    // Soft yellow border + very light fill
    bg: 'border border-[#e4c860] bg-[#e4c860]/10',
    iconBg: 'bg-[#d9ad2b] text-[#292929]',
    glow: 'rgba(228,200,96,0.25)', // soft yellow glow
    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 13a4 4 0 016 0'/>
      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2 13a10 10 0 0120 0'/>
      <circle cx='12' cy='17' r='1' fill='currentColor'/>
    </svg>`,
    pattern: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'><path d='M0 60 C120 10 240 110 360 60 C420 40 480 80 600 60' stroke='%23ffffff' stroke-width='6' fill='none' stroke-opacity='0.18'/></svg>`
  },
  {
    title: 'Knowledge Preservation',
    summary: 'Protecting and digitising heritage and local knowledge.',
    details: 'Digitisation stations, oral history projects and open archives for community access.',
    // Soft green border + very light fill
    bg: 'border border-[#a6d680] bg-[#a6d680]/10',
    iconBg: 'bg-[#4e852b] text-white',
    glow: 'rgba(166,214,128,0.25)', // soft green glow
    icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 3v10.15A4 4 0 1014 21v-9H7a1 1 0 01-1-1V4a1 1 0 011-1h6z'/>
    </svg>`,
    pattern: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'><path d='M0 50 C150 0 300 120 450 60' stroke='%23ffffff' stroke-width='5' fill='none' stroke-opacity='0.18'/></svg>`
  },
  {
    title: 'Community Empowerment',
    summary: 'Libraries as hubs for learning, entrepreneurship and civic engagement.',
    details: 'Pop-up maker spaces, mentoring sessions and community forums to spark local initiatives.',
    // Mostly white with a gentle green border
    bg: 'border border-[#a6d680] bg-white',
    iconBg: 'bg-[#a6d680] text-[#292929]',
    glow: 'rgba(166,214,128,0.2)',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <circle cx='12' cy='7' r='3' stroke-width='1.5'/>
    </svg>`,
    pattern: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'><path d='M0 70 C130 10 260 140 390 70' stroke='%23ffffff' stroke-width='5' fill='none' stroke-opacity='0.18'/></svg>`
  },
  {
    title: 'Advocacy & Partnerships',
    summary: 'Building collaborations across government, academia and civil society.',
    details: 'Policy roundtables, partnership showcases and strategic planning sessions to amplify impact.',
    // Neutral white with a soft grey border
    bg: 'border border-[#767676] bg-white',
    iconBg: 'bg-[#292929] text-[#e4c860]',
    glow: 'rgba(118,118,118,0.2)',
    icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path stroke-width='1.5' d='M12 12v9'/>
    </svg>`,
    pattern: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'><path d='M0 40 C120 80 240 0 360 40' stroke='%23ffffff' stroke-width='5' fill='none' stroke-opacity='0.18'/></svg>`
  }
])

const expanded = ref<boolean[]>(cards.value.map(() => false))
function toggle(index: number) {
  expanded.value[index] = !expanded.value[index]
}

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
    this.container.addEventListener('mousemove', this.handleMove)
  }

  handleMove = (event: MouseEvent) => {
    const rect = this.container.getBoundingClientRect()
    this.cards.forEach(card => {
      const cardRect = card.getBoundingClientRect()
      const x = event.clientX - cardRect.left
      const y = event.clientY - cardRect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  destroy() {
    this.container.removeEventListener('mousemove', this.handleMove)
  }
}

let spotlight: Spotlight | null = null

onMounted(async () => {
  await nextTick()
  if (spotlightContainer.value) {
    spotlight = new Spotlight(spotlightContainer.value)
  }
})

onUnmounted(() => {
  spotlight?.destroy()
})
</script>

<style scoped>
[data-spotlight] > div {
  --mouse-x: 50%;
  --mouse-y: 50%;
  --glow-color: rgba(255,255,255,0.25);
  position: relative;
}

/* Pattern Mask */
.pattern-layer {
  inset: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: overlay;
  mask-image: radial-gradient(circle 140px at var(--mouse-x) var(--mouse-y),
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.6) 30%,
    rgba(0,0,0,0) 70%);
  -webkit-mask-image: radial-gradient(circle 140px at var(--mouse-x) var(--mouse-y),
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.6) 30%,
    rgba(0,0,0,0) 70%);
}

/* Colored Glow */
.glow-layer {
  background: radial-gradient(
    220px circle at var(--mouse-x) var(--mouse-y),
    var(--glow-color),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

[data-spotlight] > div:hover .glow-layer {
  opacity: 1;
}

/* Expand animation */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 200ms ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>