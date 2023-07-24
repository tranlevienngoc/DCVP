import BigNumber from "bignumber.js";

export const convertBigNumber = (number: number, precision?: number) => {
  return new BigNumber(number).precision(precision || 6).toNumber();
};

export const convert_USD = (val: number, coinPrice: number) => {
  if (val.toString() === "NaN") {
    return 0;
  }
  return BigNumber(val * coinPrice)
    .dp(6, BigNumber.ROUND_DOWN)
    .toNumber();
};

export const parse = (val: any) => val.replace(/^\$/, "");

export const convertPrice = (number: string) => {
  const decimal = BigNumber(10).pow(30);
  return BigNumber(number)
    .dividedBy(10 ** 28)
    .precision(3);
};
