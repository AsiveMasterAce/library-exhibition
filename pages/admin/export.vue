<template>
  <div>
    <Navbar />
    <div class="min-h-screen text-accent">
      <div class="py-16 max-w-xl mx-auto">
        <h2 class="font-serif text-3xl mb-6 text-center">Export Attendees (Admin)</h2>
        <form @submit.prevent="downloadCSV" class="flex flex-col gap-4">
          <input v-model="password" type="password" placeholder="Admin Password" class="input" required />
          <button type="submit" class="bg-accent text-dark font-serif px-8 py-3 rounded-lg text-xl shadow-lg hover:bg-opacity-90 transition">Download CSV</button>
        </form>
        <p v-if="error" class="text-red-400 text-center mt-4">{{ error }}</p>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';
import { ref } from 'vue';

const password = ref('');
const error = ref('');

async function downloadCSV() {
  error.value = '';
  try {
    const res = await fetch('/api/export', {
      headers: { 'x-admin-password': password.value },
    });
    if (!res.ok) throw new Error('Invalid password or server error');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendees.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (e: any) {
    error.value = e.message || 'Export failed.';
  }
}
</script>

<style scoped>
.input {
  @apply bg-dark border border-gold/30 rounded-lg px-4 py-2 text-gold placeholder-gold/50 focus:outline-none focus:border-gold transition;
}
</style>
