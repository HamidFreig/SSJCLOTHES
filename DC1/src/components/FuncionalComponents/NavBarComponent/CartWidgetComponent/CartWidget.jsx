import "./CartWidgetStyle.css";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContex";
import { Link } from "react-router-dom";

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    return (
        <Link to={'/cart'}>
            <div>
                <img
                    className="LogoCarrito"
                    src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
                    alt=""
                />
                <p className="NumeroCarrito">${cart.reduce((acc,curr)=>acc + curr.price*curr.quantify,0)} </p>
            </div>
        </Link>
    );
}
