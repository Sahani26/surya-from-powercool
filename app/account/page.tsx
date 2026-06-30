

import Image from "next/image";
import Header from "@/public/components/Header";
import CTA from "@/public/components/CTA";
import Footer from "@/public/components/Footer";

// Page Header Images
import shape1 from "@/public/assets/images/shapes/page-header-shape-1.png";
import headerImg from "@/public/assets/images/resources/page-header-img-1.png";
import Link from "next/link";


// ⭐ This will now work
export const metadata = {
    title: "My Account – Manage Login & Register | suryaelectrician",
    description: "Access your account to login, register, and manage your settings.",
};
export default async function AccountPage() {
    return (
        <>
            <Header />
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__shape-1">
                    <Image src={shape1} alt="shape" />
                </div>

                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img-1">
                            <Image src={headerImg} alt="header" />
                        </div>

                        <h3>Account</h3>

                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span className="icon-angle-right"></span></li>
                                <li>Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}


            {/* Account Start */}
            <section className="account">
                <div className="container">
                    <div className="account__main-tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li data-tab="#login" className="tab-btn">
                                <span>Login</span>
                            </li>

                            <li data-tab="#register" className="tab-btn active-btn">
                                <span>Register</span>
                            </li>
                        </ul>

                        <div className="tabs-content">

                            {/* Login Tab */}
                            <div className="tab" id="login">
                                <div className="account__main-tab-inner">
                                    <form className="account__form">
                                        <div className="account__form-input-box">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="account__form-input-box">
                                            <input type="password" placeholder="Password" />
                                        </div>

                                        <div className="account__form-btn-box">
                                            <button type="submit" className="thm-btn account__form-btn">
                                                <span></span>Login now
                                            </button>

                                            <div className="checked-box">
                                                <input type="checkbox" id="remember1" defaultChecked />
                                                <label htmlFor="remember1"><span></span>Remember me?</label>
                                            </div>
                                        </div>

                                        <div className="account__form-forgot-password">
                                            <Link href="#">Forgot your password?</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Register Tab */}
                            <div className="tab active-tab" id="register">
                                <div className="account__main-tab-inner">
                                    <form className="account__form">
                                        <div className="account__form-input-box">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="account__form-input-box">
                                            <input type="password" placeholder="Password" />
                                        </div>

                                        <div className="account__form-btn-box">
                                            <button type="submit" className="thm-btn account__form-btn">
                                                <span></span>Register now
                                            </button>

                                            <div className="checked-box">
                                                <input type="checkbox" id="remember2" defaultChecked />
                                                <label htmlFor="remember2"><span></span>Remember me?</label>
                                            </div>
                                        </div>

                                        <div className="account__form-forgot-password">
                                            <Link href="#">Forgot your password?</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Account End */}
            <CTA />
            <Footer />
        </>
    );
}
