import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchProducts from '../SearchProducts/SearchProducts';

function AppNavbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold">e-commerce</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowLinks(!showLinks)}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={showLinks ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarSupportedContent">
                       <div className='ms-auto mt-4'>

                       </div>
                        <SearchProducts/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppNavbar;
