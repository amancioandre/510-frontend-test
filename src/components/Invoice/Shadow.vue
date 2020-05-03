<template>
  <div
    class="d-flex align-center justify-center no-wrap wrapper"
    :class="`flex-${features.place}`"
    :style="`${features.position}`"
  >
    <transition
      :name="placement === 'bottom' ? 'first-slide-y' : 'first-slide-x'"
      mode="out-in"
      appear
    >
      <div id="first" class="list-holders" :style="features.first"></div>
    </transition>
    <transition
      :name="placement === 'bottom' ? 'second-slide-y' : 'second-slide-x'"
      mode="out-in"
      appear
    >
      <div id="second" class="list-holders" :style="features.second"></div>
    </transition>
    <transition
      :name="placement === 'bottom' ? 'third-slide-y' : 'third-slide-x'"
      mode="out-in"
      appear
    >
      <div id="third" class="list-holders" :style="features.third"></div>
    </transition>
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
  },

  computed: {
    features() {
      let result = {};
      switch (this.placement) {
        case "bottom":
          result = {
            first: `top: ${this.height * 0.05}px; width: ${0.9 *
              this.width}px; height: ${this.height}px`,
            second: `top: ${this.height * 0.08}px; width: ${0.8 *
              this.width}px; height: ${this.height}px`,
            third: `top: ${this.height * 0.11}px; width: ${0.7 *
              this.width}px; height: ${this.height}px`,
            position: `top: -${-2 * this.height}px;`,
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
  position: absolute;
  max-height: 550px;
}

.list-holders {
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  z-index: 0;
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

.first-slide-y-enter-active,
.first-slide-x-enter-active,
.first-slide-y-leave-active,
.first-slide-x-leave-active,
.second-slide-y-enter-active,
.second-slide-x-enter-active,
.second-slide-y-leave-active,
.second-slide-x-leave-active,
.third-slide-y-enter-active,
.third-slide-x-enter-active,
.third-slide-y-leave-active,
.third-slide-x-leave-active {
  transition: opacity 2s ease-in-out,
    transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
}

.first-slide-y-enter-active,
.first-slide-x-enter-active,
.first-slide-y-leave-active,
.first-slide-x-leave-active {
  transition-delay: 0.1s;
}
.second-slide-y-enter-active,
.second-slide-x-enter-active,
.second-slide-y-leave-active,
.second-slide-x-leave-active {
  transition-delay: 0.2s;
}
.third-slide-y-enter-active,
.third-slide-x-enter-active,
.third-slide-y-leave-active,
.third-slide-x-leave-active {
  transition-delay: 0.3s;
}

.first-slide-y-enter,
.first-slide-y-leave-to {
  opacity: 0;
  transform: translateY(130px);
}
.first-slide-y-enter-to,
.first-slide-y-leave {
  transform: translateY(0px);
}
.second-slide-y-enter,
.second-slide-y-leave-to {
  opacity: 0;
  transform: translateY(145px);
}
.second-slide-y-enter-to,
.second-slide-y-leave {
  transform: translateY(0px);
}
.third-slide-y-enter,
.third-slide-y-leave-to {
  opacity: 0;
  transform: translateY(160px);
}
.third-slide-y-enter-to,
.third-slide-y-leave {
  transform: translateY(0px);
}
</style>
