<template>
  <div class="tech-image-section relative py-12 flex items-center justify-center overflow-hidden rounded-2xl">
    <!-- Background Video -->
    <video
      autoplay
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/library-exhibition.mp4" type="video/mp4" />
    </video>

    <!-- Subtle Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b
             from-[rgba(194,205,75,0.12)]
             via-[rgba(0,0,0,0.35)]
             to-[rgba(0,0,0,0.55)]">
    </div>

    <!-- Content -->
    <!-- <div class="relative z-10 text-center px-4 max-w-3xl">
      <h2 class="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
        Experience the Future
      </h2>
      <p class="text-lg md:text-xl text-white/80 mb-2">
        Exploring how libraries preserve knowledge, bridge the digital divide, and inspire communities
        through technology and innovation.

      </p>

    </div> -->
  </div>

</template>

<style scoped>
.tech-image-section {
  min-height: 380px;
  position: relative;
}
</style>