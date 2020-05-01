<template>
  <v-content class="d-flex align-stretch base-gradient">
    <router-view></router-view>
  </v-content>
</template>

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
