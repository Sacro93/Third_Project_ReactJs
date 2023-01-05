import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
import CardWidget from "./CardWidget";

function NavBar() {
  const links= ["Electronica", "Electrodomesticos", "Hogar & Deco"]
  //con links [{title: "electronica", url:"/electronica"},{title: "electronica", url:"/electronica"}]
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light mb-3 d-flex justify-content-around">
        <Logo />
        <div className="navbar-brand ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            

            {links.map((access)=> <NavItem href="#">{access}</NavItem>)}
            {/* <NavItem key={access.title} href={access.url}>{access.title}</NavItem> */}
            <CardWidget />
          </ul>
        </div>
      </nav>
    </header> 
  );
}

export default NavBar;
//11 min case after
