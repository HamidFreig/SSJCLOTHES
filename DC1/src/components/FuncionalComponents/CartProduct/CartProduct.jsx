import { useContext } from "react";
import "./CartProduct.css";
import { CartContext } from "../../../context/CartContex";
import {Link} from "react-router-dom"
export const CartProduct = () => {
    const { cart,ClearCart,RemoveProduct,total } = useContext(CartContext);


    return (
        <section className="PantallaDividida">
            <div className="ProductsCard">
                {cart.map((product) => (
                    <div className="Product" key={product.id}>
                        <img className="Img" src={product.img} alt="" />
                        <h1>PRECIO: {product.price} </h1>
                        <h1>CANTIDAD: {product.quantify} </h1>
                        <button className="ButtonRemove" onClick={() => {RemoveProduct(product)}}>ELIMINAR PRODUCTO</button>
                    </div>
                ))}
                
            </div>
        
            <div className="Payment">
                {(cart.length !== 0) ? <Link  to={'/'}><button className="ButtonClear" onClick={() => ClearCart()}>VACIAR CARRITO</button></Link> : <h1 style={{justifyContent:'CENTER',textAlign:'CENTER'}}>NO HAY PRODUCTOS EN EL CARRITO</h1>}
            
                <h1 style={{justifyContent:'CENTER',textAlign:'CENTER'}}>TOTAL A PAGAR: {total} USD</h1>
            </div>
        </section>
    );
};
