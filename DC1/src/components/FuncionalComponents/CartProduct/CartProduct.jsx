import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";
export const CartProduct = () => {
    const { cart } = useContext(CartContext);
    return (
        <div>
            {cart.map((product) => (
                <h1>{product.id}</h1>
            ))}
        </div>
    );
};
