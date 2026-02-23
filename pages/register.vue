<template>
  <div>
    <Navbar />
    <div class="min-h-screen text-accent">
      <div class="py-16">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
import RegistrationForm from '~/components/form/RegistrationForm.vue';
</script>
