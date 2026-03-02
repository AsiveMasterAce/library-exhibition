<template>
  <section
    class="text-[var(--lime-green)] py-24 px-4 flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#77bc44]/30 to-transparent">
    <div class="max-w-5xl text-center">
      <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Libraries of the Future Expo</h1>
      <p class="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-[cad2c5]">Discover how libraries preserve our heritage,
        bridge the digital divide, and spark community innovation. Join speakers, exhibitors and partners for a day of
        learning and connection.</p>

      <div class="mb-6">
        <div class="inline-flex items-center gap-4 bg-[#77bc44]/30 px-4 py-3 rounded-lg">
          <div class="text-center">
            <div class="text-3xl font-semibold">{{ timeLeft.days }}</div>
            <div class="text-sm">Days</div>
          </div>
          <div class="h-8 w-px bg-[#77bc44]/40" />
          <div class="text-center">
            <div class="text-2xl font-semibold">{{ timeLeft.hours }}</div>
            <div class="text-sm">Hours</div>
          </div>
          <div class="h-8 w-px bg-[#77bc44]/40" />
          <div class="text-center">
            <div class="text-2xl font-semibold">{{ timeLeft.minutes }}</div>
            <div class="text-sm">Minutes</div>
          </div>
          <div class="h-8 w-px bg-[#77bc44]/40" />
          <div class="text-center">
            <div class="text-2xl font-semibold">{{ timeLeft.seconds }}</div>
            <div class="text-sm">Seconds</div>
          </div>
        </div>
        <div class="text-sm mt-2 text-muted">Countdown to 16 March 2026</div>
      </div>

    <div class="flex gap-4 justify-center">
        <NuxtLink to="/register" class="relative overflow-hidden bg-[#77bc44] text-[#1f2d16] 
       px-6 py-3 rounded-lg font-semibold 
       shadow-lg transition-all duration-300 
       hover:scale-[1.03] hover:shadow-xl">
          Register Now</NuxtLink>
      
          <NuxtLink to="#schedule"
        class="border bg-[#77bc44]/20 border-[#77bc44] text-[#4a5b1a] 
       px-6 py-3 rounded-lg font-semibold 
       transition-all duration-300 
       hover:bg-white/10 hover:border-[#77bc44]/50">
          See Programme</NuxtLink>
      </div>
    </div>
    <!-- <PosterCollage class="mt-12 w-full" /> -->
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PosterCollage from './PosterCollage.vue';

const target = new Date('2026-03-16T00:00:00');
const timeLeft = ref({ days: '0', hours: '00', minutes: '00', seconds: '00' });

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function update() {
  const now = new Date();
  let diff = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
  const days = Math.floor(diff / 86400);
  diff -= days * 86400;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;
  timeLeft.value = { days: String(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

let timer: number | undefined;
onMounted(() => {
  update();
  timer = window.setInterval(update, 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
