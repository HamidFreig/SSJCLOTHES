
import ItemList from "../../components/FuncionalComponents/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default function ItemListContainer() {
    const [productList, SetProductList] = useState([]);

    const { categoryId } = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "products");

        getDocs(querySnapshot)
            .then((response) => {
                const list = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                SetProductList(list);
            })
            .catch((error) => console.log(error));
    };

    useEffect(()=>{
        getProducts();
    },[categoryId])
    
    return (
        <div className="ItemListContainer">
            <ItemList productList={productList} />
        </div>
    );
}
