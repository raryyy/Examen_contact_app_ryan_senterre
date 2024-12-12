<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useContactsStore } from "@/stores/contacts";

const newContact = reactive({ id: null, name: null, email: null, phone: null });

const contactsStore = useContactsStore();

const add = () => {
  newContact.id = Date.now();
  contactsStore.addContact({ ...newContact });
  newContact.name = null;
  newContact.email = null;
  newContact.phone = null;
};

const router = useRouter();

const handleFormSubmit = () => {
  add();
  router.push({ name: "Dashboard" });
};
</script>

<template>
  <main class="container mx-auto px-4 mt-6 flex-grow">
    <div class="flex flex-col lg:flex-row gap-6">
      <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Add / Edit Contact</h2>
        <form @submit.prevent="handleFormSubmit" class="space-y-4">
          <div>
            <label for="name" class="block font-bold">Name:</label>
            <input
              id="name"
              v-model="newContact.name"
              type="text"
              class="w-full border rounded p-2"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label for="email" class="block font-bold">Email:</label>
            <input
              id="email"
              v-model="newContact.email"
              type="email"
              class="w-full border rounded p-2"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label for="phone" class="block font-bold">Phone:</label>
            <input
              id="phone"
              v-model="newContact.phone"
              type="tel"
              class="w-full border rounded p-2"
              placeholder="Enter phone number"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Save Contact
          </button>
        </form>
      </section>
    </div>
  </main>
</template>
