<template>
  <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div class="bg-dark text-gold p-8 rounded-lg shadow-2xl max-w-sm w-full text-center">
      <h3 class="font-serif text-2xl mb-4">Registration Successful!</h3>
      <p class="mb-6">Thank you for registering. We look forward to seeing you at the exhibition.</p>
      <button @click="$emit('close')" class="bg-gold text-dark font-serif px-6 py-2 rounded-lg text-lg shadow hover:bg-opacity-90 transition">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
