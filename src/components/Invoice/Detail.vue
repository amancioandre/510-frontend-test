<template>
  <v-card
    min-width="517"
    min-height="500"
    flat
    class="ma-4 detail-padding detail-features"
  >
    <v-card-tile class="mb-8 headline font-weight-light detail-headline">
      Title
    </v-card-tile>

    <div class="mt-6 body-2">
      STF France
    </div>
    <div class="my-2 body-2">
      Des Benjoins, Rue 2, Saint-Denis
    </div>
    <div class="mb-8 body-2">
      1202 RE, Reunion
    </div>

    <v-divider class="my-6"></v-divider>

    <v-row>
      <v-col class="col-4">
        Code
      </v-col>
      <v-col class="col-8">
        STFF
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.detail-features {
  background-color: #fff;
  border-radius: 10px !important;
}

.detail-headline {
  color: #0068ff;
}

.detail-padding {
  padding: 40px 60px !important;
}
</style>
