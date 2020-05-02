<template>
  <v-container fluid style="height: 100vh">
    <v-row>
      <v-col class="d-flex flex-column flex-nowrap align-center justify-center">
        <Invoice :invoice="invoice" @click.native="onClick(invoice.id)">
          <template v-slot:shadow>
            <Shadow :height="550" :width="784" :color="'#FFF'" />
          </template>
        </Invoice>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Invoice, Shadow } from "../../components/Invoice";

export default {
  components: {
    Invoice,
    Shadow,
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

<style scoped></style>
