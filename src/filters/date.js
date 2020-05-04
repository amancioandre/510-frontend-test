import format from "date-fns/format";

export default (value, pattern = "dd MMM yyyy") => {
  if (!pattern || !value) {
    return "";
  }

  return format(value, pattern);
};
