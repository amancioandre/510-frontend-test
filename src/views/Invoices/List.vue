<template>
  <v-content>
    <v-container fluid>
      <v-row id="invoice-details" style="overflow: scroll;">
        <v-col
          class="d-flex flex-column flex-nowrap align-center justify-center"
        >
          <Invoice :invoice="invoice" @click.native="onClick(invoice.id)">
          </Invoice>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { Invoice } from "../../components/Invoice";

export default {
  components: {
    Invoice,
  },

  data() {
    return {
      invoice: {
        id: "H3110017",
        totalAmount: 204,
        buyerName: "STF France",
        sellerName: "STF Belgium",
        started: "14 Feb 2018",
        blockchainAddress: "0x4E5748...c81868F6",
      },
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

<style scoped>
#invoice-details::-webkit-scrollbar {
  width: 14px;
}
</style>
