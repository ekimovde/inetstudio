import { defineStore } from "pinia";

export const useFiltersStore = defineStore({
  id: "filters",

  state: () => ({
    countryFilter: null,

    scoreFilter: null,
  }),

  actions: {
    setCountryFilter(country) {
      this.countryFilter = country;
    },

    setScoreFilter(score) {
      this.scoreFilter = score;
    },
  },
});
