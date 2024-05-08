import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './NavigationLinks.css'
function NavigationLinks() {
    const navRef = useRef(null);

    const handleScroll = () => {
        const nav = navRef.current;
        if (nav.scrollLeft > 0) {
            nav.classList.add('scroll-start');
        } else {
            nav.classList.remove('scroll-start');
        }

        if (nav.scrollLeft < nav.scrollWidth - nav.clientWidth) {
            nav.classList.add('scroll-end');
        } else {
            nav.classList.remove('scroll-end');
        }
    };
    return (
        <div className="navigation-container container mt-5 py-4" style={{ overflowX: 'auto' }}
            ref={navRef}
            onScroll={handleScroll}>
            <div className="row">
                <nav className="nav">
                    {/* <Link className="nav-link text-capitalize fw-bold text-black active" aria-current="page" to={'/'} >home</Link> */}
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/smartphones'} >smartphones</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/laptops'} >laptops</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/fragrances'} >fragrances</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/skincare'} >skincare</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/groceries'} >groceries</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/home-decoration'} >home-decoration</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/furniture'} >furniture</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/tops'} >tops</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/womens-dresses'} >womens-dresses</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/womens-shoes'} >womens-shoes</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/mens-shirts'} >mens-shirts</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/mens-shoes'} >mens-shoes</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/mens-watches'} >mens-watches</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/womens-watches'} >womens-watches</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/womens-bags'} >womens-bags</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/womens-jewellery'} >womens-jewellery</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/sunglasses'} >sunglasses</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/automotive'} >automotive</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/motorcycle'} >motorcycle</Link>
                    <Link className="nav-link text-capitalize fw-bold text-black" to={'/lighting'} >lighting</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavigationLinks