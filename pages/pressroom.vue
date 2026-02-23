<template>
  <div>
    <Navbar />
    <main class="min-h-screen container mx-auto py-12 px-4">
      <section class="max-w-3xl mx-auto bg-dark p-8 rounded-lg shadow-lg border border-gold/20">
        <h1 class="font-serif text-4xl text-gold mb-4">Pressroom</h1>
        <p class="text-accent mb-6">Media resources, press releases and high-resolution images for the Libraries of the Future Expo.</p>

        <article class="mb-6">
          <h2 class="font-bold text-2xl text-[var(--lime-green)] mb-2">Press Release — Libraries of the Future Expo launches</h2>
          <p class="text-accent/90 mb-2">City Library Hall — 04 March 2026</p>
          <p class="text-accent mb-4">Libraries of the Future Expo brings together librarians, technologists and community leaders to showcase digital inclusion, heritage preservation and community-driven innovation. For enquiries and interview requests contact the media team below.</p>
          <NuxtLink to="/presskit.pdf" class="inline-block bg-gold text-dark px-4 py-2 rounded">Download Press Kit (PDF)</NuxtLink>
        </article>

        <section>
          <h3 class="font-semibold text-lg text-gold mb-3">Media Contact</h3>
          <p class="text-accent">Media Team — press@libraryexpo.org</p>
          <p class="text-accent">Phone: +27 11 000 0000</p>
        </section>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
</script>
