export default function formatCurrency(amount: string) {
  const numericAmount = parseFloat(amount); // Convert string to number
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount);
}
