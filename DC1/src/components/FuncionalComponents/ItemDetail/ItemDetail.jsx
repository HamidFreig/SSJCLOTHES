import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);
    const contexto = useContext(CartContext);

    function CountFuction() {
        if (count === 0) {
            return setCount(0);
        } else {
            return setCount(count - 1);
        }
    }

    function AddItem(item, count) {
        if (count !== 0) {
            contexto.AddItem(item, count);
            setCount(0);
        } else {
            alert("NO SE PUEDE AGREGAR AL CARRITO");
        }
    }

    return (
        <div className="ItemProduct">
                <div className="CardProduct" key={product.id}>
                    <h1>{product.category} {product.brand}</h1>
                    <img className="Img" src={product.img} alt="" />
                    <p className="Price">${product.price} USD</p>
                    <button className="ButtonCount" onClick={() => CountFuction()}>-</button>
                    <p className="CountNumber">{count}</p>
                    <button className="ButtonCount" onClick={() => setCount(count + 1)}>+</button>
                    <div className="Buttons"><button className="Button" onClick={() => AddItem(product, count)}>AÑADIR AL CARRITO</button>
                     <Link to={"/"}><button className="Button">SEGUIR COMPRANDO</button></Link>
                     <Link to={"/cart"}><button className="Button">TERMINAR COMPRA</button></Link>
                    </div>
                </div>
        </div>
    );
};

export default ItemDetail;
