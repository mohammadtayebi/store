export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
// get me all the type(categories)
export const getUniqueValue = (data, type) => {
  let unique = data.map((item) => item[type]);
  // if there is array in array we use this if in this project only color is array in array
  if (type === "colors") {
    unique = unique.flat();
  }
  // return the "all" and dont return the same ones
  return ["all", ...new Set(unique)];
};
