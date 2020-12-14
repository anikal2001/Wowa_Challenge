
// Calculate the monthly payment of Mortgages
export default function CalculateRate(
  Downpayment: number,
  HomePrice: number,
  MortgageAmount: number,
  Amortization: number,
  InterestRate: number
) {
  const principal = Math.abs(MortgageAmount - (Downpayment / 100) * HomePrice);
  const monthlyInterestRate = InterestRate / 12;
  const numPayments = Amortization * 12;
  const numerator =
    monthlyInterestRate * (1 + monthlyInterestRate) ** numPayments;
  const denominator = (1 + monthlyInterestRate) ** numPayments - 1;
  const num1 = numerator / denominator;
  const monthlyPayments = (principal * num1) / 12;
  return monthlyPayments.toPrecision(5);
}
