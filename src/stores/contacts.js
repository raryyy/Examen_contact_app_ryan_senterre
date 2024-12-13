import { reactive, watch } from "vue";
import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", () => {
  if (!localStorage.getItem("contacts")) {
    localStorage.setItem(
      "contacts",
      JSON.stringify([
        { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", phone: "098-765-4321" },
      ])
    );
  }
  const contacts = reactive(JSON.parse(localStorage.getItem("contacts")));

  const addContact = (contact) => {
    contacts.unshift(contact);
  };

  const updateContact = (updatedContact) => {
    const index = contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
    }
  };

  watch(
    () => contacts,
    (newContacts) => {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    { deep: true }
  );

  return { contacts, addContact, updateContact };
});
