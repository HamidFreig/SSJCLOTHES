import ItemDetail from "../../components/FuncionalComponents/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { ItemId } = useParams();
    const [itemProduct, setItemProduct] = useState([]);

    const getProductoItem = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, "products", ItemId);

        getDoc(querySnapshot)
            .then((res) => {
                setItemProduct({ id: res.id, ...res.data() });
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getProductoItem();
    }, [ItemId]);
    
    return (
        <div>
            <ItemDetail product={itemProduct} />
        </div>
    );
};
export default ItemDetailContainer;
