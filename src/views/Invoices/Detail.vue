<template>
  <v-container fluid style="height: 100vh">
    <v-row>
      <v-col class="d-flex flex-nowrap align-center justify-center">
        <invoice :invoice="invoice" />
        <detail
          v-for="transaction in invoice.transaction"
          :key="`transaction-${transaction.entity}`"
          :transaction="transaction"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Invoice, Detail } from "../../components/Invoice";

export default {
  components: {
    Invoice,
    Detail,
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
        transaction: [
          {
            entity: "Buyer",
            address: "Des Benjoins, Rue 2, Saint-Denis",
            otherAddress: "1202 RE, Reunion",
            code: "STFF",
            operatingName: "STF France",
            functionDescription:
              "Local Operations, Manufacturing, Sales, Marketing",
            tradeRegisterNumber: "004101534",
            VATNumber: "1101317918C49",
            IBANNumber: "RE11INGB4254456990",
            BICCode: "INGBRA5C",
          },
          {
            entity: "Seller",
            address: "Des Benjoins, Rue 2, Saint-Denis",
            otherAddress: "1202 RE, Reunion",
            code: "STFF",
            operatingName: "STF France",
            functionDescription:
              "Local Operations, Manufacturing, Sales, Marketing",
            tradeRegisterNumber: "004101534",
            VATNumber: "1101317918C49",
            IBANNumber: "RE11INGB4254456990",
            BICCode: "INGBRA5C",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
