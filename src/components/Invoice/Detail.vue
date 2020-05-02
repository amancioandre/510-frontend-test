<template>
  <v-card
    min-width="600"
    max-height="550"
    flat
    class="ma-4 detail-padding detail-features"
  >
    <div class="mb-8 headline font-weight-light detail-headline">
      {{ transaction.entity }}
    </div>

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

    <div class="caption">
      <v-row>
        <v-col class="col-5">
          Code
        </v-col>
        <v-col class="col-7">
          {{ transaction.code }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          Operating Name
        </v-col>
        <v-col class="col-7">
          {{ transaction.operatingName }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          Function Description
        </v-col>
        <v-col class="col-7">
          {{ transaction.functionDescription }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          Trade Register Number
        </v-col>
        <v-col class="col-7">
          {{ transaction.tradeRegisterNumber }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          VAT Number
        </v-col>
        <v-col class="col-7">
          {{ transaction.VATNumber }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          IBAN Number
        </v-col>
        <v-col class="col-7">
          {{ transaction.IBANNumber }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5">
          BIC Code
        </v-col>
        <v-col class="col-7">
          {{ transaction.BICCode }}
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
// { entity: "Seller", address: "Des Benjoins, Rue 2, Saint-Denis", otherAddress:
// "1202 RE, Reunion", code: "STFF", operatingName: "STF France",
// functionDescription: "Local Operations, Manufacturing, Sales, Marketing",
// tradeRegisterNumber: "004101534", VATNumber: "1101317918C49", IBANNumber:
// "RE11INGB4254456990", BICCode: "INGBRA5C", },
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
  padding: 30px 50px !important;
}
</style>
