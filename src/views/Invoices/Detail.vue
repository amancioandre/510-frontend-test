<template>
  <v-content>
    <transition name="detail" mode="out-in" leave>
      <v-container fluid>
        <v-row id="invoice-details" style="overflow: scroll;">
          <v-col
            class="d-flex flex-nowrap align-center justify-end offset-md-2"
          >
            <div
              class="d-flex justify-center"
              style="z-index: 50;"
              @click="goBack"
            >
              <v-img
                src="../../assets/img/icon-arrow-left.png"
                max-height="28"
                max-width="28"
                alt="back-icon"
              />
            </div>
            <Invoice :invoice="invoice"> </Invoice>
            <transition name="first-transaction" appear>
              <detail :transaction="invoice.transaction[0]" />
            </transition>
            <transition name="second-transaction" appear>
              <detail :transaction="invoice.transaction[1]" />
            </transition>
          </v-col>
          <v-col class="col-3"> </v-col>
        </v-row>
      </v-container>
    </transition>
  </v-content>
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

  methods: {
    goBack() {
      this.$router.push("/invoices");
    },
  },
};
</script>

<style scoped>
#invoice-details::-webkit-scrollbar {
  display: none;
}

.first-transaction-enter-active,
.first-transaction-leave-active {
  transition: opacity 1.2s ease, transform 0.8s ease-in-out;
}

.first-transaction-enter-active {
  transition-delay: 0.6s;
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

.second-transaction-enter-active,
.second-transaction-leave-active {
  transition: opacity 1.2s ease, transform 0.8s ease-in-out;
}
/* cubic-bezier(0.45, 0, 0.55, 1) */

.second-transaction-enter-active {
  transition-delay: 0.6s;
}

.second-transaction-enter,
.second-transaction-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.second-transaction-enter-to,
.second-transaction-leave {
  opacity: 1;
  transform: translateX(0px);
}

.detail-enter-active,
.detail-leave-active {
  transition: transform 0.8s ease-in-out;
}

.detail-enter,
.detail-leave-to {
  transform: translateX(400px);
}

.detail-enter-to,
.detail-leave {
  transform: translateX(0px);
}
</style>
