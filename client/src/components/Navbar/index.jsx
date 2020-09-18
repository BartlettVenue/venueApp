import React from 'react'

export default function index() {
    return (
        // ! bootstrap navbar from https://getbootstrap.com/docs/4.5/components/navbar/
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {/* //todo add logo here & remove Bartlett Venue text */}
                {/* <img src="" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> */}
                    Bartlett Venue
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">VENUE RENTAL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PHOTOSHOOT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CALENDAR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
