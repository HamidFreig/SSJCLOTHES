import { useState } from "react";
import "./ItemDetail.css"
const ItemDetail = ({ itemId }) => {

  const [count,setCount] = useState(0);
  
  function CountFuction() {
    if(count === 0){
      return(setCount(0))
    }else{
      return(setCount(count-1))
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
                </div>
            ))}
        </div>
    );
};

export default ItemDetail;
