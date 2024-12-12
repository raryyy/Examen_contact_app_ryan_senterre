import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: JSON.parse(localStorage.getItem("contacts")) || [
      { id: 1, name: "John Doe", email: "john@gmail.com", phone: "123-456-7890" },
      { id: 2, name: "Jane Doe", email: "jane@gmail.com", phone: "098-765-4321" },
      { id: 3, name: "Jason Doe", email: "jane@gmail.com", phone: "098-765-4321" },
    ],
  })
  
});
