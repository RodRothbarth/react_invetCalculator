import logo from "../assets/investment-calculator-logo.png";
export function Header({}) {
  return (
    <div>
      <header id="header">
        <img src={logo} alt="money bag" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}
