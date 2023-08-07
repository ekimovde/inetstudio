<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <filters />

      <user-list />
    </v-row>
  </v-container>
</template>

<script>
import Filters from "./Filters";
import UserList from "./UserList";

export default {
  name: "ContentBlock",

  components: {
    Filters,
    UserList,
  },
};
</script>
