import { useState,useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import "./ItemDetail.css"
const ItemDetail = ({ itemId }) => {

  const [count,setCount] = useState(0);
  const contexto = useContext(CartContext);


  function CountFuction() {
    if(count === 0){
      return(setCount(0))
    }else{
      return(setCount(count-1))
    }
  }

  function AddItem(item,count){
    if(count != 0){
      contexto.AddItem(item,count)
      setCount(0)
    }
    else{
      alert("NO SE PUEDE AGREGAR AL CARRITO")
    }
    

  }
    return (
        <div className="ItemProduct">
            {itemId.map((item) => (
                <div className="CardProduct" key={item.id}>
                    <h1>
                        {item.category} {item.brand}
                    </h1>
                    <img className="Img" src={item.img} alt="" />
                    <p className="Price">${item.price} </p>
                    <button className="ButtonCount" onClick={()=>CountFuction()}>-</button>
                <p className="CountNumber">{count}</p>
                <button className="ButtonCount" onClick={()=>setCount(count+1)}>+</button>
                <div>
                <button onClick={() => (AddItem(item, count))}>AÑADIR AL CARRITO</button>
                <button>SEGUIR COMPRANDO</button>
                <button>TERMINAR COMPRA</button></div>
                </div>
            ))}
            
        </div>
    );
};

export default ItemDetail;
