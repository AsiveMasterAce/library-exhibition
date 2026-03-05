<template>
  <div>
    <Navbar />
    <div class="min-h-screen text-accent container mx-auto">
      <HeroSection />
      <FuturisticPatternSection />
      <AboutSection />
      <ProgrammeSection />
      <GallerySection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
import HeroSection from '~/components/exhibition/HeroSection.vue';
import GallerySection from '~/components/exhibition/GallerySection.vue';
import AboutSection from '~/components/exhibition/AboutSection.vue';
import ProgrammeSection from '~/components/exhibition/ProgrammeSection.vue';
import PartnersSection from '~/components/exhibition/PartnersSection.vue';
import ContactSection from '~/components/exhibition/ContactSection.vue';
import FuturisticPatternSection from '~/components/exhibition/FuturisticPatternSection.vue';
</script>
