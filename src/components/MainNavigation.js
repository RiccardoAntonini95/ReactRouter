import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {/*NavLink utilizza uno speciale classname al quale diamo una funzione che riceve un oggetto e restituisce le classi css*/}
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}