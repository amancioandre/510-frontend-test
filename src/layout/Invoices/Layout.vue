<template>
  <v-content class="d-flex align-stretch base-gradient">
    <v-container fluid class="d-flex flex-row align-center">
      <img src="../../assets/img/button-el.png" alt="return button" />
      <div>
        Show me Invoices of STF Belgium from January to April 2018
      </div>
    </v-container>
    <transition name="detail" mode="out-in">
      <router-view></router-view>
    </transition>
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

.detail-enter-active,
.detail-leave-active {
  transition: transform 0.8s ease-in-out;
}
</style>
