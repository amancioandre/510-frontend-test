<template>
  <div
    class="d-flex align-center justify-center no-wrap wrapper"
    :class="`flex-${features.place}`"
    :style="`${features.position}`"
  >
    <div id="first" class="list-holders" :style="features.first"></div>
    <div id="second" class="list-holders" :style="features.second"></div>
    <div id="third" class="list-holders" :style="features.third"></div>
  </div>
</template>

<script>
export default {
  props: {
    placement: {
      type: String,
      default: "bottom",
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#FFF",
    },
  },

  mounted() {},

  methods: {
    onPosition() {},
  },

  computed: {
    features() {
      let result = {};
      switch (this.placement) {
        case "top":
          result = {
            first: `top: -${30}px; width: ${0.9 * this.width}px; height: ${
              this.height
            }px`,
            second: `top: -${this.height + 2 * 30}px; width: ${0.8 *
              this.width}px; height: ${this.height}px`,
            third: `top: -${2 * this.height + 3 * 30}px; width: ${0.7 *
              this.width}px; height: ${this.height}px`,
            position: `top: -${this.height}px;`,
            place: "column",
          };
          break;
        case "bottom":
          result = {
            first: `top: ${(2 * this.height) / 3 + 15}px; width: ${0.9 *
              this.width}px; height: ${this.height}px`,
            second: `top: ${this.height / 3 + 2 * 15}px; width: ${0.8 *
              this.width}px; height: ${this.height}px`,
            third: `top: ${3 * 15}px; width: ${0.7 * this.width}px; height: ${
              this.height
            }px`,
            position: `top: -${this.height}px;`,
            place: "column",
          };
          break;
        case "left":
          result = {
            first: `left: -${15}px; height: ${this.height -
              0.1 * this.height}px; width: ${this.width}px`,
            second: `left: ${-this.width / 3 - 2 * 15}px; height: ${this
              .height -
              0.2 * this.height}px; width: ${this.width}px`,
            third: `left: ${(-2 * this.width) / 3 - 3 * 15}px; height: ${this
              .height -
              0.3 * this.height}px; width: ${this.width}px`,
            position: `top: ${-this.height +
              0.05 * this.height}px; left: -${0}px;`,
            place: "row",
          };
          break;
      }
      return result;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  max-height: 550px;
}

.list-holders {
  position: relative;
  background-color: red;
  border-radius: 10px;
  /* background-color: inherit; */
}

#first {
  opacity: 0.5;
  filter: blur(1px);
  z-index: 30;
}
#second {
  opacity: 0.3;
  filter: blur(2px);
  z-index: 20;
}
#third {
  opacity: 0.15;
  filter: blur(3px);
  z-index: 10;
}
</style>
