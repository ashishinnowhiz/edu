import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="education-nav">
                    <div className="container">
                        <div className="navbar navbar-expand-lg navbar-light">


                            <ul className="navbar-nav">
                                <Link href="/" activeClassName="active">
                                    <a onClick={toggleNavbar} className="nav-link"> <h4 style={{ color: "#2878EB" }}> Global Education Platform</h4></a>
                                </Link>
                            </ul>
                            {/* <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                               <h4> Global Education Platform</h4>
                                    {/* <img src="/images/logo.jpg" alt="logo" width='150px' /> */}
                            {/* </a>
                            </Link> */}

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                {/* <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form> */}

                                <ul className="navbar-nav">
                                    <li className="nav-item">

                                        <Link href="/" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">

                                        <Link href="/">
                                            <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                        </Link>
                                    </li>


                                    {/* <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Courses  <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 1</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 2</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 3</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 4</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 5</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 6</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 7</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 8</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 9</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 10</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 11</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 12</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 13</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 14</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 15</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 16</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 17</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 18</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 19</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 20</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 21</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 22</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses 23</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="row m-0 mobile-none">
                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-code-alt'></i>
                                                                </div>
                                                                <h3>Development</h3>
                                                                <span className="sub-title">60 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-camera'></i>
                                                                </div>
                                                                <h3>Photography</h3>
                                                                <span className="sub-title">21 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-layer'></i>
                                                                </div>
                                                                <h3>Design</h3>
                                                                <span className="sub-title">58 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bxs-flag-checkered'></i>
                                                                </div>
                                                                <h3>Language</h3>
                                                                <span className="sub-title">99 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-health'></i>
                                                                </div>
                                                                <h3>Fitness</h3>
                                                                <span className="sub-title">21 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-line-chart'></i>
                                                                </div>
                                                                <h3>Business</h3>
                                                                <span className="sub-title">49 Courses</span>

                                                                <Link href="">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link href="/advisor" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link"> Instructors</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About Us </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="cart-btn">
                                            {/* <Link href="/cart">
                                                <a><i className='flaticon-shopping-cart'></i> <span>3</span></a>
                                            </Link> */}
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/logIn">
                                            <a className="default-btn" style={{ background: "linear-gradient(to right, #2878EB, #F129C9)" }}>
                                                <i className="flaticon-user"></i> Login/Register <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
