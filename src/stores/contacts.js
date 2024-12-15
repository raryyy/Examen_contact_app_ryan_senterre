import { reactive, computed, watch } from "vue";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

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
  const searchQuery = reactive({ value: "" });

  const filteredContacts = computed(() => {
    if (!searchQuery.value) return contacts;

    return contacts.filter(contact => {
      const searchLower = searchQuery.value.toLowerCase();
      return (
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower)
      );
    });
  });

  const addContact = (contact) => {
    contacts.unshift(contact);
    toast.success("Contact ajouté avec succès !");
  };

  const updateContact = (updatedContact) => {
    const index = contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      toast.success("Contact mis à jour avec succès !");
    } else {
      toast.error("Erreur de mise à jour du contact.");
    }
  };

  const deleteOneById = (id) => {
    const index = contacts.findIndex((item) => item.id == id);
    if (index !== -1) {
      contacts.splice(index, 1);
      toast.success("Contact supprimé avec succès.");
    } else {
      toast.error("Erreur lors de la suppression du contact.");
    }
  };


  watch(
    () => contacts,
    (newContacts) => {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    { deep: true }
  );


  return { contacts, searchQuery, filteredContacts, addContact, updateContact, deleteOneById };
});
