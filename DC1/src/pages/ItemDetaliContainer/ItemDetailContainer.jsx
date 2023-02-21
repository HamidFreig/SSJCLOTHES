import ItemDetail from "../../components/FuncionalComponents/ItemDetail/ItemDetail";
import Products from "../../data/Products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ItemDetailContainer = () => {
    const { ItemId } = useParams();
    const [itemProduct, setItemProduct] = useState([]);

    const getProductoItem = new Promise((res, rej) => {
        if (ItemId) {
            const filterproduct = Products.filter((item) => item.id == ItemId);
            res(filterproduct);
        }
    });

    useEffect(() => {
        getProductoItem
            .then((response) => {
                setItemProduct(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },[ItemId]);

    return (
        <div>
            <ItemDetail itemId={itemProduct} />
        </div>
    );
};
export default ItemDetailContainer;
