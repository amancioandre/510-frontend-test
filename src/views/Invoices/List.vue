<template>
  <v-container fluid style="height: 100vh">
    <v-row>
      <v-col class="d-flex flex-nowrap align-center justify-center">
        <invoice />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Invoice } from "../../components/Invoice";

export default {
  components: {
    Invoice,
  },
};
</script>

<style></style>
