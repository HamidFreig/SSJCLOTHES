import { CartContext } from "./CartContex";
import { useState } from "react";

export const AllContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const AddItem = (item, quantify) => {
        const ProductsCart = {
            id: item.id,
            brand: item.brand,
            category: item.category,
            img: item.img,
            price: item.price,
            quantify: quantify,
        };
        setCart([...cart, ProductsCart]);
    };

    return (
        <CartContext.Provider value={{ cart, AddItem }}>
            {children}
        </CartContext.Provider>
    );
};
