<template>
  <div style="max-width: 784px; max-height: 550px;">
    <v-card
      min-width="784"
      max-width="784"
      min-height="550"
      flat
      class="invoice-padding invoice-features"
    >
      <v-row class="d-flex justify-space-between mb-6">
        <v-col cols="2">
          <v-img
            max-width="100px"
            max-height="100px"
            src="../../assets/img/logo-510.png"
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
            {{ invoice.id }}
          </h2>
        </v-col>
        <v-col class="pa-2">
          <h4 class="body-2 text-end mb-2">
            Total amount
          </h4>
          <h2 class="headline text-end font-weight-light invoice-headline">
            € {{ invoice.totalAmount }}
          </h2>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-between mb-6">
        <v-col class="pa-2">
          <h4 class="body-2 mb-3">
            Buyer Name
          </h4>
          <h2 class="headline font-weight-light">
            {{ invoice.buyerName }}
          </h2>
        </v-col>
        <v-col class="pa-2">
          <h4 class="body-2 mb-3">
            Seller Name
          </h4>
          <h2 class="headline font-weight-light">
            {{ invoice.sellerName }}
          </h2>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-between mb-6">
        <v-col class="pa-2">
          <h4 class="body-2 mb-3">
            Started
          </h4>
          <h2 class="headline font-weight-light">
            {{ invoice.started }}
          </h2>
        </v-col>
        <v-col class="pa-2">
          <h4 class="body-2 mb-3">
            Blockchain Address
          </h4>
          <h2 class="headline font-weight-light">
            {{ invoice.blockchainAddress }}
          </h2>
        </v-col>
      </v-row>
    </v-card>
    <slot name="shadow"></slot>
  </div>
</template>

<script>
export default {
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.invoice-features {
  background-color: #fff;
  border-radius: 10px !important;
  z-index: 100;
}

.invoice-headline {
  color: #0068ff;
}

.invoice-padding {
  padding: 70px 80px !important;
}
</style>
