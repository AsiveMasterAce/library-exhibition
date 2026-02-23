import { ref } from 'vue';
import { useFetch } from '#app';

interface RegistrationForm {
  full_name: string;
  email: string;
  phone?: string;
  reason?: string;
  comment?: string;
}

export default function useRegistration() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function register(form: RegistrationForm) {
    loading.value = true;
    error.value = null;
    const { data, error: fetchError } = await useFetch('/api/register', {
      method: 'POST',
      body: form,
    });
    loading.value = false;
    if (fetchError.value) {
      throw new Error(fetchError.value.statusMessage || 'Registration failed');
    }
    if (!data.value?.success) {
      throw new Error('Registration failed');
    }
    return true;
  }

  return { register, loading, error };
}
