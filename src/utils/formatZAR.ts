export function formatZAR(amount: number): string {
  if (isNaN(amount)) return "R0";
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(amount);
}
