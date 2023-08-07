<template>
  <v-col cols="12" md="4">
    <v-card max-width="450" class="mx-auto">
      <v-list three-line>
        <template v-for="(item, index) in filteredUsers">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-btn @click="setTooltipId(item.id)">
                <v-img :src="item.avatar" />
              </v-btn>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title" />

              <v-list-item-subtitle v-html="item.subtitle" />
            </v-list-item-content>

            <v-tooltip
              :value="isTooltipShown(item.id)"
              :attach="true"
              location="top"
            >
              {{ item.address }}
            </v-tooltip>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "pinia";
import { useUsersStore } from "@/stores/users";

export default {
  name: "UserList",

  computed: {
    ...mapState(useUsersStore, ["filteredUsers"]),
  },

  methods: {
    isTooltipShown(tooltipId) {
      return tooltipId === this.tooltipId;
    },

    setTooltipId(tooltipId) {
      if (tooltipId === this.tooltipId) {
        this.tooltipId = null;

        return;
      }

      this.tooltipId = tooltipId;
    },
  },

  data: () => ({
    tooltipId: null,
  }),
};
</script>
