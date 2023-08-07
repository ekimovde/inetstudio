<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "pinia";
import { useUsersStore } from "@/stores/users";
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    ContentBlock,
    Footer,
  },

  async created() {
    await this.fetchUsersFromJSON();
  },

  computed: {
    localAttrs() {
      const attrs = {};

      attrs.absolute = true;
      attrs.fixed = false;

      return attrs;
    },
  },

  methods: {
    ...mapActions(useUsersStore, ["fetchUsersFromJSON"]),
  },
};
</script>
