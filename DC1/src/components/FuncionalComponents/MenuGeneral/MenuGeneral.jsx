import "./MenuGeneralStyle.css";
import { NavLink } from "react-router-dom";

export default function MenuComponent() {
    return (
        <div className="MenuFlex">
            <div className="MenuComponent">
                <ul>
                    <li>
                        <NavLink className="Link" to="/">TODOS LOS PRODUCTOS</NavLink>
                    </li>
                    <li>
                        <NavLink className="Link" to="/category/Polera">POLERAS</NavLink>
                    </li>
                    <li>
                        <NavLink className="Link" to="/category/Poleron">POLERONES</NavLink>
                    </li>
                    <li>
                        <NavLink className="Link" to="/category/Jockey">JOCKEYS</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
