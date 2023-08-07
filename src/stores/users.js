import { defineStore } from "pinia";

import { useFiltersStore } from "./filters";

import { usersService } from "@/shared/service/usersService";
import { FIXED_NUMBER_REGEX } from "@/shared/repository/constants";

const { fetchUsersFromJson, fetchUsersFromApi } = usersService();

export const useUsersStore = defineStore({
  id: "users",

  state: () => ({
    users: [],
  }),

  actions: {
    async fetchUsersFromJSON() {
      try {
        this.users = await fetchUsersFromJson();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    async fetchUsersFromAPI() {
      try {
        this.users = await fetchUsersFromApi();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },

  getters: {
    filteredUsers() {
      const { countryFilter, scoreFilter } = useFiltersStore();
      let filteredUsers = this.users;

      if (countryFilter) {
        filteredUsers = filteredUsers.filter(
          (user) => user.country === countryFilter
        );
      }

      if (scoreFilter) {
        const score = scoreFilter.match(FIXED_NUMBER_REGEX)[0];

        if (scoreFilter.startsWith(">")) {
          filteredUsers = filteredUsers.filter((user) => user.score > score);
        } else if (scoreFilter.startsWith("<")) {
          filteredUsers = filteredUsers.filter((user) => user.score < score);
        }
      }

      return filteredUsers;
    },
  },
});
