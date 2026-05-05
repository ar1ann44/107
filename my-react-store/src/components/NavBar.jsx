import {Link} from "react-router";
import "./NavBar.css"


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
            <div className="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/public/images/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top mx-2"/>
                Spin & Sound
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/about"}>About</Link>
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                        <Link className="nav-link" to={"/catalog"}>Catalog</Link>
                        <Link className="nav-link" to={"/admin"}>Admin</Link>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;