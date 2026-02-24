<template>
  <div class="tech-image-section relative flex items-center justify-center overflow-hidden rounded-2xl py-12 md:py-20 lg:py-28">
    <!-- Background Image -->
    <img 
      src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" 
      alt="Tech Library"
      class="absolute inset-0 w-full h-full object-cover brightness-[0.65] transition-transform duration-500 hover:scale-105"
    />

    <!-- Gradient Overlay -->
    <div 
      class="absolute inset-0 bg-gradient-to-b
             from-[rgba(194,205,75,0.15)]
             via-[rgba(0,0,0,0.55)]
             to-[rgba(0,0,0,0.85)]">
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4 leading-tight">
        Experience the Future
      </h2>
      <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-4 leading-relaxed">
        Exploring how libraries preserve knowledge, bridge the digital divide, and inspire communities
        through technology and innovation.
      </p>
    </div>
  </div>
</template>

<style scoped>
.tech-image-section {
  min-height: 320px;
  @apply md:min-h-[400px] lg:min-h-[500px];
}
</style>