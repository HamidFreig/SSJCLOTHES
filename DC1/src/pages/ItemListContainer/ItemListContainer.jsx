import Products from "../../data/Products";
import ItemList from "../../components/FuncionalComponents/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [productList, SetProductList] = useState([]);

    const {categoryId} = useParams();
    const getProducts = new Promise((res, rej) => {
        if(categoryId){
            const filterProduct = Products.filter((item) => item.category === categoryId)
            setTimeout(() => {
                res(filterProduct);
            }, 1000);
        }else{
            setTimeout(() => {
                res(Products);
            }, 1000);
        }});
    
        


    useEffect(() => {
        getProducts
            .then((response) => {
                SetProductList(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },[categoryId]);

    return (
        <div className="ItemListContainer">
            <ItemList productList={productList} />
        </div>
    );
}
