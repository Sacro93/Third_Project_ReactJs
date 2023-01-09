import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
import CartWidget from "./CartWidget";

function NavBar() {
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light mb-3 d-flex justify-content-around">
      <Logo/>
        <div className="navbar-brand ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            
            <NavItem to="/" >Logo Tienda</NavItem>
            <NavItem to="/" >Electronica</NavItem>
            
          </ul>
          <CartWidget/>
        </div>
      </nav>
    </header> 
  );
}

export default NavBar;
//11 min case after
