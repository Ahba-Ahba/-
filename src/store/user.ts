import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "simonhunchun",
    age: 18,
  }),
});
