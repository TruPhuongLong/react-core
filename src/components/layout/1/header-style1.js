import React from 'react'

import './header-style1.scss'

export default () => (
    <section>
        {/* <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand page-scroll" href="#page-top"><img src="images/logo.png" alt="Lattes theme logo" /></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#about">About</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#services">Services</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#team">Team</a>
                        </li>
                        <li>
                            <a class="page-scroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <header>
            <div className="container">
                <div className="slider-container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome To Our Studio!</div>
                        <div className="intro-heading">It's Nice To Meet You</div>
                        <a href="#about" className="page-scroll btn btn-xl">Tell Me More</a>
                    </div>
                </div>
            </div>
        </header>
    </section>

)