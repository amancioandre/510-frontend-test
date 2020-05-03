import truncate from "@/filters/truncate";
import date from "@/filters/date";

const Filters = {
  install(Vue) {
    Vue.filter("truncate", truncate);
    Vue.filter("date", date);
  },
};

export default Filters;
