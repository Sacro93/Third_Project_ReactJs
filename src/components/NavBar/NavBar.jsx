import NavItem from "./NavItem";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <header >
      <nav className="navbar navbar-expand-lg bg-light ">
      <Logo />
        <div className="navbar-brand">
        
          <div className="navbar-brand">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <NavItem href="/electronica">Electronica</NavItem>
              <NavItem href="/Eletrodomesticos">Electrodomesticos</NavItem>
              <NavItem href="/Hogar & Deco">Hogar & Deco</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
//11 min case after
