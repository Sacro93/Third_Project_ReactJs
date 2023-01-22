import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";


function NavBar(props) {
  const context = useContext(cartContext);
 

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light mb-3 d-flex justify-content-around">
        <NavItem to="/">
          {" "}
          <Logo />
        </NavItem>
        <div className="navbar-brand ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <NavItem to="/">Products</NavItem>
            <NavItem to="/category/Appliances">Appliances</NavItem>
            <NavItem to="/category/Tecnology">Tecnology</NavItem>
            <NavItem to="/category/Furniture">Furniture</NavItem>
            <NavItem to="/cart">
              <CartWidget /> 
            </NavItem>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
