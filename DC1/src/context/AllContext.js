import { CartContext } from "./CartContex";
import { useState } from "react";

export const AllContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, SetTotal] = useState(0)

    const AddItem = (item, quantify) => {

        if (ExistProduct(item.id)) {
            cart.map((product)=>{
                product.quantify = product.quantify + quantify;
                return 1;
            })
        } else {
            const ProductsCart = {
                id: item.id,
                brand: item.brand,
                category: item.category,
                img: item.img,
                price: item.price,
                quantify: quantify,
            };
            setCart([...cart, ProductsCart]);
        }

            
            SetTotal(total + (item.price*quantify));
 

    };

    const ClearCart = () => {
        setCart([]);
        SetTotal(0);
    };

    const RemoveProduct = (productRemove) => {
        setCart(cart.filter((product) => product.id !== productRemove.id));
        SetTotal(total - productRemove.price*productRemove.quantify)
    };

    const ExistProduct = (productId) => {

    if(cart.find((product) => product.id === productId)){
        return true;
    }else{
        return false;
    }
    };


    return (
        <CartContext.Provider
            value={{ cart, AddItem, ClearCart, RemoveProduct, ExistProduct,total}}
        >
            {children}
        </CartContext.Provider>
    );
};
