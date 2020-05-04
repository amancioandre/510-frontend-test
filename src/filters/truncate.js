export default (value, length = 40) => {
  if (!value) {
    return "";
  }

  if (value.length > length) {
    const middle = "...";

    return (
      value.substring(0, value.length / 4) +
      middle +
      value.substring((3 * value.length) / 4, value.length)
    );
  }

  return value;
};
