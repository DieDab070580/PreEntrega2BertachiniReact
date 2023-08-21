import './NavBar.css'
import  Logovenier  from "../../img/Logovenier.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <div className="logo">
                <img src= {Logovenier} alt="logo" width="150"/>
            </div>
        <div>
            <button>Látex</button>
            <button>Esmaltes</button>
            <button>Impermeabilizantes</button>
            <button>Barnices</button>
        </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar