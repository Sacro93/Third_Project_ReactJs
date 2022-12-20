import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
import CardWidget from "./CardWidget";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light mb-3 d-flex justify-content-around">
        <Logo />
        <div className="navbar-brand ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <NavItem href="/electronica">Electronica</NavItem>
            <NavItem href="/Eletrodomesticos">Electrodomesticos</NavItem>
            <NavItem href="/Hogar & Deco">Hogar & Deco</NavItem>
            <CardWidget />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
//11 min case after
