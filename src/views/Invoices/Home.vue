<template>
  <v-content>
    <v-container fluid>
      <v-row
        id="invoice-details"
        style="overflow: scroll;"
        class="d-flex flex-nowrap"
      >
        <v-col
          v-if="detailRoute"
          class="d-flex align-center justify-end offset-md-1"
        >
          <router-link to="/invoices">
            <div style="z-index: 50;" v-if="detailRoute">
              <v-img
                src="../../assets/img/icon-arrow-left.png"
                max-height="28"
                max-width="28"
                alt="back-icon"
              /></div
          ></router-link>
        </v-col>
        <v-col
          class="d-flex flex-column flex-nowrap align-center justify-start"
        >
          <!-- <transition :name="transitionName" mode="out-in"> -->
          <Invoice :invoice="invoice" v-if="detailRoute" />
          <Invoice
            :invoice="invoice"
            @click.native="onClick(invoice.id)"
            v-else
          />
          <!-- </transition> -->
          <Shadow
            placement="bottom"
            :width="784"
            :height="550"
            v-if="!detailRoute"
          />
        </v-col>
        <router-view></router-view>
      </v-row>
    </v-container>
  </v-content>
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
      transitionName: null,
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

  computed: {
    detailRoute() {
      if (this.$route.name == "invoice-detail") {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {
    $route(to, from) {
      if (!from.path.startsWith("/invoices/")) {
        this.transitionName = "home";
      } else {
        this.transitionName = "detail";
      }
    },
  },
};
</script>

<style scoped>
#invoice-details::-webkit-scrollbar {
  width: 14px;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.8s ease-in-out,
    transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
}
.home-enter {
  opacity: 0;
  transform: translateY(100px);
}
.home-leave {
  transform: translate(0px);
}
.home-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.home-leave-to {
  transform: translateX(-400px);
}

/* .detail-enter-active,
.detail-leave-active {
  transition: opacity 0.8s ease-in-out,
    transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
  transition-delay: 0.8s;
}
.detail-enter,
.detail-leave-to {
  transform: translateX(0px);
}
.detail-enter,
.detail-leave-to {
  transform: translateX(-400px);
} */

/* .to-detail-enter-active,
.to-detail-leave-active {
  transition-delay: 1s;
} */
</style>
