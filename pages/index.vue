<template>
  <div>
    <Navbar />
    <div class="min-h-screen text-accent container mx-auto">
        <HeroSection />
          <FuturisticPatternSection />
        <AboutSection />
        <ProgrammeSection />
        <!-- <SpeakersSection /> -->
        <!-- <ScheduleSection /> -->
        <GallerySection />
        <PartnersSection />
        <!-- <MediaResources /> -->
        <RegisterCTA />
        <ContactSection />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
import HeroSection from '~/components/exhibition/HeroSection.vue';
import ScheduleSection from '~/components/exhibition/ScheduleSection.vue';
import GallerySection from '~/components/exhibition/GallerySection.vue';
import RegisterCTA from '~/components/exhibition/RegisterCTA.vue';
  import SpeakersSection from '~/components/exhibition/SpeakersSection.vue';
  import SponsorsSection from '~/components/exhibition/SponsorsSection.vue';
  import AboutSection from '~/components/exhibition/AboutSection.vue';
  import ProgrammeSection from '~/components/exhibition/ProgrammeSection.vue';
  import PartnersSection from '~/components/exhibition/PartnersSection.vue';
  import MediaResources from '~/components/exhibition/MediaResources.vue';
  import ContactSection from '~/components/exhibition/ContactSection.vue';
  import FuturisticPatternSection from '~/components/exhibition/FuturisticPatternSection.vue';
</script>
