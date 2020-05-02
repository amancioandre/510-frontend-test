<template>
  <v-card
    min-width="517"
    min-height="500"
    flat
    class="ma-4 detail-padding detail-features"
  >
    <v-card-tile class="mb-8 headline font-weight-light detail-headline">
      {{ transaction.entity }}
    </v-card-tile>

    <div class="mt-6 body-2">
      {{ transaction.name }}
    </div>
    <div class="my-2 body-2">
      {{ transaction.address }}
    </div>
    <div class="mb-8 body-2">
      {{ transaction.otherAddress }}
    </div>

    <v-divider class="my-6"></v-divider>

    <v-row>
      <v-col class="col-4">
        Codez
      </v-col>
      <v-col class="col-8">
        STFF
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
};
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
