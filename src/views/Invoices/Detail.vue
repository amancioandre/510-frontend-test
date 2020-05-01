<template>
  <v-container fluid style="height: 100vh">
    <v-row style="height: 20%">
      header
    </v-row>
    <v-row>
      <v-col class="d-flex flex-nowrap align-center justify-center">
        <invoice />
        <detail />
        <detail />
      </v-col>
    </v-row>
    <v-row style="height: 20%">
      footer
    </v-row>
  </v-container>
</template>

<script>
import { Invoice, Detail } from "../../components/Invoice";

export default {
  components: {
    Invoice,
    Detail,
  },
};
</script>

<style></style>
