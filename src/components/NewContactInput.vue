<script setup>
import { useRouter } from 'vue-router';
import { useContactsStore } from "@/stores/contacts";

const contactsStore = useContactsStore();

const router = useRouter();

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <main class="container mx-auto px-4 mt-6 flex-grow">
  <div class="flex flex-col lg:flex-row gap-6">
  <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
  <h2 class="text-xl font-semibold mb-4">Add / Edit Contact</h2> 
  <form class="space-y-4">
    <div>
      <label for="name" class="block font-bold">Name:</label>
      <input
        id="name"
        type="text"
        class="w-full border rounded p-2"
        placeholder="Enter name"
      />
    </div>
    <div>
      <label for="email" class="block font-bold">Email:</label>
      <input
        id="email"
        type="email"
        class="w-full border rounded p-2"
        placeholder="Enter email"
      />
    </div>
    <div>
      <label for="phone" class="block font-bold">Phone:</label>
      <input
        id="phone"
        type="tel"
        class="w-full border rounded p-2"
        placeholder="Enter phone number"
      />
    </div>
    <button
      type="submit"
      @click="navigateTo('Dashboard')"
      class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
    >
      Save Contact
    </button>
  </form>
  </section>
  </div>
  </main>
</template>
