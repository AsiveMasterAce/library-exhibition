<template>
  <div>
    <Navbar />
    <div class="min-h-screen text-accent">
      <div class="py-16">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="font-serif text-3xl md:text-4xl mb-6 text-center">Register to Attend</h1>
          <iframe
            :src="msFormUrl"
            class="w-full h-[800px] bg-white rounded-xl shadow-2xl border-0"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';

const msFormUrl =
  'https://forms.office.com/pages/responsepage.aspx?id=5OLy_mythkSNqKI-HjYqC2Hk93RY0ZhClQo649zvC7pUOTMxTUZUR0dKQkhRNkZKS0ZQQ0dWTzlTRi4u&route=shorturl&embed=true';
</script>
