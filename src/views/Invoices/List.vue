<template>
  <v-container fluid style="height: 100vh">
    <v-row>
      <v-col class="d-flex flex-nowrap align-center justify-center">
        <invoice
          v-for="invoice in invoices"
          :key="`invoice-${invoice.id}`"
          :invoice="invoice"
          @click.native="onClick(invoice.id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Invoice } from "../../components/Invoice";

export default {
  components: {
    Invoice,
  },

  data() {
    return {
      invoices: [
        {
          id: "H3110017",
          totalAmount: 204,
          buyerName: "STF France",
          sellerName: "STF Belgium",
          started: "14 Feb 2018",
          blockchainAddress: "0x4E5748...c81868F6",
        },
      ],
    };
  },

  methods: {
    onClick(id) {
      this.$router.push({
        name: "invoice-detail",
        params: {
          invoice_id: id,
        },
      });
    },
  },
};
</script>

<style></style>
