<template>
  <v-col cols="12" md="4">
    <v-select
      :value="countryFilter"
      :items="countriesFilters"
      clearable
      label="Filter by country"
      @change="changeCountryFilter"
    />

    <v-select
      :value="scoreFilter"
      :items="scoresFilters"
      clearable
      label="Filter by score"
      @change="changeScoreFilter"
    />
  </v-col>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useFiltersStore } from "@/stores/filters";
import { FIXED_COUNTRIES } from "@/shared/repository/constants";

export default {
  name: "Filters",

  data: () => ({
    countriesFilters: FIXED_COUNTRIES,

    scoresFilters: ["> 20", "< 10"],
  }),

  computed: {
    ...mapState(useFiltersStore, ["countryFilter", "scoreFilter"]),
  },

  methods: {
    ...mapActions(useFiltersStore, ["setCountryFilter", "setScoreFilter"]),

    changeCountryFilter(country) {
      this.setCountryFilter(country);
    },

    changeScoreFilter(score) {
      this.setScoreFilter(score);
    },
  },
};
</script>
