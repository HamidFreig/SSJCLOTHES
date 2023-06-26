import Item from "../Item/Item";
import "./ItemListStyle.css";
import { Link } from "react-router-dom";
const ItemList = ({ productList }) => {
  return (
    <div className="ItemList">
      {productList.map((producto) => (
        <div key={producto.id}>
          <Link className="Link" to={`/item/${producto.id} `}>
            <Item producto={producto} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
