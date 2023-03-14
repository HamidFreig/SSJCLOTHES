import NavBar from "./components/FuncionalComponents/NavBarComponent/NavBar";
import MenuGeneral from "./components/FuncionalComponents/MenuGeneral/MenuGeneral";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetaliContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllContext } from "./context/AllContext";
import { CartProduct } from "./components/FuncionalComponents/CartProduct/CartProduct";
function App() {
    return (
        <BrowserRouter>
        <AllContext>            
            <NavBar />
            <MenuGeneral />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/item/:ItemId" element={<ItemDetailContainer />}></Route>
                <Route path="/cart" element={<CartProduct />}></Route>
                <Route
                    path="*"
                    element={
                        <div style={{ fontSize: 70, textAlign: "center" }}>
                            ¡RUTA NO ENCONTRADA!
                        </div>
                    }
                />
            </Routes>
            </AllContext>

        </BrowserRouter>
    );
}

export default App;
