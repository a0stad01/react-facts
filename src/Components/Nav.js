import logo from "./images/logo.png"

function Navbar() {
   return ( <nav className="nav">
     <div className="nav-items">
        <img className="image" src={logo}
        alt="React Logo" 
        style={{width: "40px", height: "40px"}} />
        <h2 className="nav-header">ReactFacts</h2>
    </div>
            <h3 className="nav-title">React Course - Project 1</h3>
       
    </nav>
   );
}
export default Navbar;