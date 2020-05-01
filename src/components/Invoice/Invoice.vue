<template>
  <v-card
    min-width="784"
    max-height="500"
    flat
    class="ma-4 invoice-padding invoice-features"
  >
    <v-row class="d-flex justify-space-between mb-6">
      <v-col cols="2">
        <v-img
          max-width="100px"
          max-height="100px"
          src="../../assets/logo-510.png"
          alt=""
        />
      </v-col>
      <v-col cols="2" class="d-flex align-end">
        <v-chip outlined color="amber lighten-1" text-color="amber lighten-1"
          >Unpaid</v-chip
        >
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-between mb-6">
      <v-col class="pa-2">
        <h4 class="body-2 mb-2">
          Invoice
        </h4>
        <h2 class="headline font-weight-light invoice-headline">
          H3110017
        </h2>
      </v-col>
      <v-col class="pa-2">
        <h4 class="body-2 text-end mb-2">
          Total amount
        </h4>
        <h2 class="headline text-end font-weight-light invoice-headline">
          € 204
        </h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-between mb-6">
      <v-col class="pa-2">
        <h4 class="body-2 mb-3">
          Buyer Name
        </h4>
        <h2 class="headline font-weight-light">
          STF FRANCE
        </h2>
      </v-col>
      <v-col class="pa-2">
        <h4 class="body-2 mb-3">
          Seller Name
        </h4>
        <h2 class="headline font-weight-light">
          STF BELGIUM
        </h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-between mb-6">
      <v-col class="pa-2">
        <h4 class="body-2 mb-3">
          Started
        </h4>
        <h2 class="headline font-weight-light">
          14 Feb 2018
        </h2>
      </v-col>
      <v-col class="pa-2">
        <h4 class="body-2 mb-3">
          Blockchain Address
        </h4>
        <h2 class="headline font-weight-light">
          0x4E5748...c81868F6
        </h2>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.invoice-features {
  background-color: #fff;
  border-radius: 10px !important;
}

.invoice-headline {
  color: #0068ff;
}

.invoice-padding {
  padding: 70px 80px !important;
}
</style>
