import logo from "../assets/investment-calculator-logo.png";
const Header = (props) => {
  return (
    <header id="header">
      <img src={logo} alt="Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
