import React from 'react';
import Link from '../../utils/ActiveLink';


const NavbarTop = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    // React.useEffect(() => {
    //     let elementId = document.getElementById("navbar");
    //     document.addEventListener("scroll", () => {
    //         if (window.scrollY > 170) {
    //             elementId.classList.add("is-sticky");
    //         } else {
    //             elementId.classList.remove("is-sticky");
    //         }
    //     });
    //     window.scrollTo(0, 0);
    // })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div className="navbar-area" style={{ background: 'linear-gradient(to right, #2878EB, #F129C9)', paddingTop:"13px", paddingBottom:"13px"}}>
                <div className="education-nav">
                    <div className="container">
                        <div className="navbar navbar-expand-lg navbar-light">

                            <Link href="#">
                                <a className="navbar-brand phone">
                                <i class='bx bxs-phone'  ></i> +61 452 497 919
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="navbar-brand mail">
                                <i class='bx bx-envelope'></i> farhanhossain583@gmail.com
                                </a>
                            </Link>
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                        <a href="#" className="d-block head_iconlink head_iconlink">
                                        <i className='bx bxl-facebook head_icon'></i>
                                    </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                        <a href="#" className="d-block head_iconlink">
                                        <i className='bx bxl-twitter head_icon'></i>
                                    </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                        <a href="#" className="d-block head_iconlink">
                                        <i className='bx bxl-instagram head_icon'></i>
                                    </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                        <a href="#" className="d-block head_iconlink">
                                        <i className='bx bxl-pinterest head_icon'></i>
                                    </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavbarTop;
