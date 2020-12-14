
// Calculate the monthly payment of Mortgages
export default function CalculateRate(
  Downpayment: number,
  HomePrice: number,
  MortgageAmount: number,
  Amortization: number,
  InterestRate: number
) {
  const principal = Math.abs(MortgageAmount - ((Downpayment / 100) * HomePrice));
  const monthlyInterestRate = (InterestRate/100) / 12;
  const numPayments = Amortization * 12;
  const base = 1 + monthlyInterestRate
  const multiplier = Math.pow((base),numPayments);
  const numerator = principal * monthlyInterestRate * (multiplier)
  const denominator = (multiplier) - 1
  const monthlyPayments = numerator / denominator;
  return monthlyPayments.toPrecision(5);
}
