<template>
  <div class="flex justify-center py-12">
    <NuxtLink
      to="/register"
      class="relative overflow-hidden px-10 py-5 rounded-lg font-semibold text-[#1f2d16]
             shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl
             btn-cta"
    >
      Register for the Exhibition
      <!-- Moving gradient overlay -->
      <span class="absolute inset-0 bg-gradient-to-r from-[#77bc44]/50 via-[#a3d977]/30 to-[#77bc44]/50 opacity-70 animate-gradient-slide pointer-events-none rounded-lg"></span>
      <!-- Inner glow -->
      <span class="absolute inset-0 shadow-inner-glow pointer-events-none rounded-lg"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Gradient sliding effect */
@keyframes gradientSlide {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.animate-gradient-slide {
  background-size: 400% 100%;
  animation: gradientSlide 6s linear infinite;
}

/* Soft inner glow */
.shadow-inner-glow {
  box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.25),
              inset 0 0 30px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;
}

/* Hover shine */
.btn-cta:hover .shadow-inner-glow {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.35),
              inset 0 0 40px rgba(255, 255, 255, 0.25);
}
</style>