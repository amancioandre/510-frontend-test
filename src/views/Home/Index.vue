<template>
  <v-container fluid>
    <div class="blob"></div>
    <v-row class="d-flex justify-center">
      <v-col
        md="6"
        style="height: 290px; z-index: 100;"
        class="d-flex align-end text-center font-weight-thin"
      >
        <div class="display-3">
          Show me <span>Invoices</span> of <span>STF Belgium</span> from
          <span>January</span> to <span>April</span> of <span>2018</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.blob {
  position: absolute;
  top: 0;
  width: 800px;
  height: 800px;
  background: rgba(226, 231, 239, 0);
  background: radial-gradient(
    circle,
    rgba(226, 231, 239, 1) 52%,
    rgba(247, 250, 255, 0) 68%
  );
}
</style>
