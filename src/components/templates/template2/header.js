import React from 'react'
import './header.scss'

export default () => (
    // <!-- ================ header section start ================= -->	
    <header className="header_area">
        <div className="header-top">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div id="logo">
                        <a href="index.html"><img src="img/Logo.png" alt="" title="" /></a>
                    </div>
                    <div className="ml-auto d-none d-md-block d-md-flex">
                        <div className="media header-top-info">
                            <span className="header-top-info__icon"><i className="fas fa-phone-volume"></i></span>
                            <div className="media-body">
                                <p>Have any question?</p>
                                <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                            </div>
                        </div>
                        <div className="media header-top-info">
                            <span className="header-top-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <p>Have any question?</p>
                                <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    {/* <!-- <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a> --> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav">
                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="properties.html">Properties</a></li>
                            <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                            <li className="nav-item submenu dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Blog</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <ul className="social-icons ml-auto">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i className="fas fa-rss"></i></a></li>
                    </ul>
                </div>
            </nav>


        </div>
    </header>
)