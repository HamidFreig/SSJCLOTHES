import { useContext,useState } from "react";
import "./CartProduct.css";
import { CartContext } from "../../../context/CartContex";
import {Link} from "react-router-dom"
import {getFirestore,collection,addDoc} from "firebase/firestore"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const CartProduct = () => {
    const { cart,ClearCart,RemoveProduct,total } = useContext(CartContext);
    const db = getFirestore();
    const [datos, setDatos]= useState({
        nombre:'',
        email:'',
        phone:''
    })


    const HandleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    

    const CreateOrder = (event) =>{
        const querySnapshot = collection(db, "orders");
        addDoc(querySnapshot, {

            buyer:{
                email: datos.email,
                name: datos.nombre,
                phone : datos.phone,
            },
            product: cart.map((product)=>{
                return{
                    brand: product.brand,
                    id: product.id,
                    price: product.price,
                    quantify : product.quantify,
                };
            }), 
            total: cart.reduce((acc, curr)=>acc + curr.quantify*curr.price,0)
            
        }).then((res)=>{
            alert(`se ha generado la order ${res.id}`)
            console.log(datos.nombre)})
          .catch((error)=>console.log(error))

    }
    return (
        <section className="PantallaDividida">
            <div className="ProductsCard">
                {cart.map((product) => (
                    <div className="Product" key={product.id}>
                        <img className="Img" src={product.img} alt="" />
                        <h1>PRECIO: {product.price} </h1>
                        <h1>CANTIDAD: {product.quantify} </h1>
                        <button className="ButtonRemove" onClick={() => {RemoveProduct(product)}}>ELIMINAR PRODUCTO</button>
                    </div>
                ))}
                
            </div>
        
            <div className="Payment">
                {(cart.length !== 0) ? <Link  to={'/'}><button className="ButtonClear" onClick={() => ClearCart()}>VACIAR CARRITO</button></Link> : <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>}
                <h1 >TOTAL A PAGAR: {total} USD</h1>
                
                {(cart.length !== 0) ? <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': { m: 1 },
                }}
                >
                    <TextField
                        helperText="Please enter your name"
                        id="demo-helper-text-aligned"
                        label="Name"
                        name="nombre"
                        onChange={HandleInputChange}
                    />
                    <TextField
                        helperText="Please enter your email"
                        id="demo-helper-text-aligned-no-helper"
                        label="Email"
                        name="email"
                        onChange={HandleInputChange}
                    />                
                    <TextField
                        helperText="Please repeat your email"
                        id="demo-helper-text-aligned-no-helper"
                        label="Email"
                        name="email"
                        onChange={HandleInputChange}
                    />
                    <TextField
                        helperText="Please enter your phone"
                        id="demo-helper-text-aligned-no-helper"
                        label="Phone"
                        name="phone"
                        onChange={HandleInputChange}
                    />
                </Box> : <h1></h1>}
                
                {(cart.length !== 0) ? <button onClick={CreateOrder}className='ButtonCheck'>GENERAR ORDEN</button>:<h1></h1>}
                
            </div>
        </section>
    );
};
