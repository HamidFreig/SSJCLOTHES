import { useContext } from "react";
import "./CartProduct.css";
import { CartContext } from "../../../context/CartContex";
import {Link} from "react-router-dom"
export const CartProduct = () => {
    const { cart,ClearCart,RemoveProduct } = useContext(CartContext);


    return (
        <section className="PantallaDividida">
            <div className="ProductsCard">
                {cart.map((product) => (
                    <div className="Product" key={product.id}>
                        <img className="Img" src={product.img} alt="" />
                        <h1>PRECIO: {product.price} </h1>
                        <h1>CANTIDAD: {product.quantify} </h1>
                        <button onClick={() => {RemoveProduct(product.id)}}>ELIMINAR PRODUCTO</button>
                    </div>
                ))}
                <Link to={'/'}><button className="Button" onClick={() => ClearCart()}>VACIAR CARRITO</button></Link>
            </div>
        
            <div className="Payment">
                <h1>pago</h1>
            </div>
        </section>
    );
};
