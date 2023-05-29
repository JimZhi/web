export function sum(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sum(20, 100));

// 从未被使用过，应该会被tree-sharking调
export function formatPrice(priceString: string) {
  if (priceString.includes("$")) {
    return "xxxx";
  } else {
    return "yyyy";
  }
}
