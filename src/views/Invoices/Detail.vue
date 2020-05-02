<template>
  <v-container fluid>
    <v-row
      id="invoice-details"
      class="d-flex flex-nowrap"
      style="overflow: scroll;"
    >
      <v-col class="align-self-center col-1">
        <div class="d-flex justify-end">
          <v-img
            src="../../assets/img/icon-arrow-left.png"
            max-height="28"
            max-width="28"
            alt="back-icon"
            @click="() => $router.push('/invoices')"
          />
        </div>
      </v-col>
      <v-col class="d-flex flex-nowrap align-center justify-center">
        <Invoice :invoice="invoice">
          <template v-slot:shadow>
            <Shadow :placement="'left'" :width="784" :height="550" />
          </template>
        </Invoice>
      </v-col>
      <v-col class="d-flex flex-nowrap">
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
import { Invoice, Detail, Shadow } from "../../components/Invoice";

export default {
  components: {
    Invoice,
    Detail,
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

<style scoped>
#invoice-details::-webkit-scrollbar {
  width: 0;
}
</style>
