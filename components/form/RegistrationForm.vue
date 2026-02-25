<template>
  <form
    @submit.prevent="submit"
    class="bg-[#77bc44]/10 p-8 rounded-xl shadow-2xl max-w-xl mx-auto flex flex-col gap-6 border border-[#c2cd4b]/20"
  >
    <h2 class="font-serif text-3xl text-[#1f2d16] mb-6 text-center">Register to Attend</h2>

    <!-- Full Name -->
    <div class="flex flex-col gap-2">
      <label for="full_name" class="text-[#1f2d16] font-serif">Full Name *</label>
      <input
        v-model="form.full_name"
        id="full_name"
        type="text"
        placeholder="John Doe"
        required
        class="input"
      />
    </div>

    <!-- Email -->
    <div class="flex flex-col gap-2">
      <label for="email" class="text-[#1f2d16] font-serif">Email *</label>
      <input
        v-model="form.email"
        id="email"
        type="email"
        placeholder="john@example.com"
        required
        class="input"
      />
    </div>

    <!-- Phone -->
    <div class="flex flex-col gap-2">
      <label for="phone" class="text-[#1f2d16] font-serif">Phone</label>
      <input
        v-model="form.phone"
        id="phone"
        type="tel"
        placeholder="+27 82 123 4567"
        class="input"
      />
    </div>

    <!-- Designation -->
    <div class="flex flex-col gap-2">
      <label for="designation" class="text-[#1f2d16] font-serif">Designation</label>
      <select
        v-model="form.designation"
        id="designation"
        class="input"
      >
        <option disabled value="">Select your designation</option>
        <option>Librarian</option>
        <option>Academic</option>
        <option>ICT Service Provider</option>
        <option>Community Member</option>
        <option>Government Official</option>
        <option>Exhibitor</option>
        <option>Speaker</option>
        <option>Learner</option>
        <option>Media</option>
      </select>
    </div>

    <!-- Attendance -->
    <div class="flex flex-col gap-2">
      <label for="attendance" class="text-[#1f2d16] font-serif">Attendance</label>
      <select
        v-model="form.attendance"
        id="attendance"
        class="input"
      >
        <option disabled value="">Select days attending</option>
        <option>Day 1 Only</option>
        <option>Day 2 Only</option>
        <option>Day 3 Only</option>
        <option>Day 1 to 3</option>
      </select>
    </div>

    <!-- Reason / Comment -->
    <div class="flex flex-col gap-2">
      <label for="reason" class="text-[#1f2d16] font-serif">Why do you want to attend?</label>
      <textarea
        v-model="form.reason"
        id="reason"
        rows="2"
        placeholder="Tell us briefly..."
        class="input resize-none"
      ></textarea>
    </div>

    <div class="flex flex-col gap-2">
      <label for="comment" class="text-[#1f2d16] font-serif">Additional Comments</label>
      <textarea
        v-model="form.comment"
        id="comment"
        rows="2"
        placeholder="Any special requirements..."
        class="input resize-none"
      ></textarea>
    </div>

    <!-- Submit -->
    <button
      type="submit"
      :disabled="loading"
      class="bg-[#77bc44] text-[#1f2d16] font-serif px-8 py-3 rounded-lg text-xl shadow-lg hover:scale-[1.03] hover:shadow-xl transition disabled:opacity-60"
    >
      <span v-if="loading">Registering...</span>
      <span v-else>Submit Registration</span>
    </button>

    <!-- Success / Error -->
    <SuccessModal v-if="success" @close="success = false" />
    <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useRegistration from '~/composables/useRegistration';
import SuccessModal from './SuccessModal.vue';

const { register } = useRegistration();

const form = ref({
  full_name: '',
  email: '',
  phone: '',
  designation: '',
  attendance: '',
  reason: '',
  comment: '',
});

const loading = ref(false);
const success = ref(false);
const error = ref('');

async function submit() {
  error.value = '';
  loading.value = true;
  try {
    await register(form.value);
    success.value = true;
    form.value = {
      full_name: '',
      email: '',
      phone: '',
      designation: '',
      attendance: '',
      reason: '',
      comment: '',
    };
  } catch (e: any) {
    error.value = e.message || 'Registration failed.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.input {
  @apply bg-white/90 text-dark border border-[#c2cd4b]/40 rounded-lg px-4 py-2 focus:outline-none focus:border-[#c2cd4b] transition;
  color: #1f2d16;
  placeholder: #1f2d16/50;
}
</style>