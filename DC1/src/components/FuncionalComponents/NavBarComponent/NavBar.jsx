import "./NavBarStyles.css";
import CartWidget from "./CartWidgetComponent/CartWidget";

export default function NavBar() {
  return (
    <div className="NavBar">
      <header className="NavBarStyle">
        <div>
          <img
            className="LogoStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Dragon_Ball_Tenkaichi_Budokai.svg/1200px-Dragon_Ball_Tenkaichi_Budokai.svg.png"
            alt=""
          />
        </div>
        <CartWidget />
        <div className="TittleNavBar">SSJ-CLOTHES</div>
      </header>
    </div>
  );
}
