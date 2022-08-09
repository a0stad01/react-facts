import icon from "./images/icon.png"

function Main() {
    return (
        <div className="main-container">
    <h1 className="header-1"> Fun Facts About React</h1>
    <div className="wrapper">
    <ul className="list">
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <img className="icon" src={icon}
        alt="React Icon" />
    </div>
    </div>

    );
}

export default Main;