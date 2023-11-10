import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Express News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/*  */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                News Areas
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/business">Business</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/entertainment">Entertainment</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/general">General</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/health">Health</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/science">Science</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/sports">Sports</Link></a>
                                <a className="dropdown-item" href="/"><Link className="nav-link" to="/technology">Technology</Link></a>

                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/India">India</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/USA">USA</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Brazil">Brazil</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Canada">Canada</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Japan">Japan</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/China">China</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Mexico">Mexico</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
