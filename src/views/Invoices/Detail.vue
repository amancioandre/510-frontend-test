<template>
  <v-content>
    <v-container fluid>
      <v-row
        id="invoice-details"
        class="d-flex flex-nowrap"
        style="overflow: scroll;"
      >
        <v-col class="align-self-center col-1">
          <div class="d-flex justify-end" @click="goBack">
            <v-img
              src="../../assets/img/icon-arrow-left.png"
              max-height="28"
              max-width="28"
              alt="back-icon"
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
          <transition name="first-transaction" appear>
            <detail :transaction="invoice.transaction[0]" />
          </transition>
          <!-- <transition name="second-transaction">
          <detail :transaction="invoice.transaction[1]" />
        </transition> -->
        </v-col>
      </v-row>
    </v-container>
  </v-content>
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

  methods: {
    async goBack() {
      await setTimeout(() => {}, 1000);
      this.$router.push("/invoices");
    },
  },
};
</script>

<style scoped>
#invoice-details::-webkit-scrollbar {
  width: 0;
}

.first-transaction-enter-active,
.first-transaction-leave-active {
  transition: opacity 1s ease, transform 0.6s cubic-bezier(0.45, 0, 0.55, 1);
}

.first-transaction-enter-active {
  transition-delay: 2.3s;
}

.first-transaction-enter,
.first-transaction-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.first-transaction-enter-to,
.first-transaction-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>
