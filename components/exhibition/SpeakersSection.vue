<template>
  <section class="py-16 px-4 bg-gradient-to-t from-dark/40 to-transparent">
    <h2 class="font-serif text-3xl md:text-4xl mb-6 text-center text-pal2">Speakers</h2>
    <p class="text-pal3 text-center max-w-2xl mx-auto mb-8">Meet the leaders shaping library innovation — talks, panels and hands-on workshops.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div v-for="speaker in speakers" :key="speaker.id" class="bg-dark p-6 rounded-lg shadow-lg border border-pal3/10 hover:scale-[1.01] transition flex flex-col items-center gap-3">
        <div v-if="speaker.photo" class="w-24 h-24 rounded-full overflow-hidden mb-2">
          <img :src="speaker.photo" :alt="speaker.name" class="w-full h-full object-cover" />
        </div>
        <div v-else class="avatar-placeholder mb-2">{{ speaker.initials }}</div>
        <h3 class="text-xl font-semibold text-pal1 text-center">{{ speaker.name }}</h3>
        <p class="text-pal2/80 text-center mb-1">{{ speaker.title }}</p>
        <p class="text-pal3 text-sm text-center">{{ speaker.blurb }}</p>
        <button class="btn-ghost mt-3">View Bio</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const speakers = [
  { id: 1, name: 'Prof. L. Mokoena', title: 'Library Futures', photo: '/images/speakers/speaker1.svg', blurb: 'On digital inclusion and community archives.', initials: 'LM' },
  { id: 2, name: 'A. Patel', title: 'Digital Literacy Lead', photo: '/images/speakers/speaker2.svg', blurb: 'Scaling grassroots training programmes.', initials: 'AP' },
  { id: 3, name: 'Dr. N. Dlamini', title: 'Heritage Curator', photo: '/images/speakers/speaker3.svg', blurb: 'Preserving local knowledge for future generations.', initials: 'ND' },
];
</script>
