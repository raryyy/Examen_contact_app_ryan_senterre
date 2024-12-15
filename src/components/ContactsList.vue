<script setup>
import ContactsListItem from "@/components/ContactsListItem.vue";
import { useContactsStore } from "@/stores/contacts";

const props = defineProps({
  contacts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul id="contacts-list" class="divide-y divide-gray-200">
    <ContactsListItem
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    />
  </ul>
</template>
