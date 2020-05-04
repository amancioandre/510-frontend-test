<template>
  <v-content class="d-flex align-stretch base-gradient">
    <v-container fluid class="d-flex flex-row align-center">
      <img src="../../assets/img/button-el.png" alt="return button" />
      <div>
        Show me Invoices of STF Belgium from January to April 2018
      </div>
    </v-container>
    <router-view></router-view>
    <v-container fluid class="d-flex align-stretch justify-end pr-12">
      <v-btn
        class="mx-2"
        x-large
        fab
        color="blue"
        v-if="$route.name === 'invoice-detail'"
      >
        <v-img
          max-width="32px"
          max-height="32px"
          src="../../assets/img/icon-wallet.png"
          style="filter: brightness(200%);"
        ></v-img>
      </v-btn>
    </v-container>
  </v-content>
</template>

<script>
export default {
  compute: {
    detail() {
      console.log(this.$route.name === "invoice-detail");
      return this.$route.name === "invoice-detail";
    },
  },
};
</script>

<style lang="css" scoped>
.base-gradient {
  background: rgb(247, 250, 255);
  background: linear-gradient(
    120deg,
    rgba(247, 250, 255, 1) 0%,
    rgba(226, 231, 239, 1) 100%
  );
}
</style>
