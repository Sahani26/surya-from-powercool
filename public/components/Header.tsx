"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/images/resources/header-logo.png"
import LogoFooter from '@/public/assets/images/resources/Footer-Logo.png'

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            /* ---------- Sticky Header ---------- */
            const stickyMenus = document.querySelectorAll(".stricked-menu");
            stickyMenus.forEach((menu) => {
                if (scrollY > 130) {
                    menu.classList.add("stricky-fixed");
                } else {
                    menu.classList.remove("stricky-fixed");
                }
            });

            /* ---------- One Page Sticky Header ---------- */
            const onePageHeader = document.querySelector(".sticky-header--one-page");
            if (onePageHeader) {
                if (scrollY > 130) {
                    onePageHeader.classList.add("active");
                } else {
                    onePageHeader.classList.remove("active");
                }
            }

            /* ---------- Scroll To Top Button ---------- */
            const scrollToTopBtn = document.querySelector(".scroll-to-top");
            if (scrollToTopBtn) {
                if (scrollY > 500) {
                    scrollToTopBtn.classList.add("show");
                } else {
                    scrollToTopBtn.classList.remove("show");
                }
            }

            /* ---------- Scroll progress (width decrease) ---------- */
            const scrollInner = document.querySelector<HTMLElement>(".scroll-to-top__inner");

            if (scrollInner) {
                const docHeight =
                    document.documentElement.scrollHeight - window.innerHeight;

                const scrollPercent = Math.min((scrollY / docHeight) * 100, 100);

                // width decreases on scroll
                scrollInner.style.width = `${100 - scrollPercent}%`;
            }

            setIsSticky(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Lock body scroll when mobile nav or search is open
    useEffect(() => {
        if (isMobileNavOpen || isSearchOpen) {
            document.body.classList.add("locked");
        } else {
            document.body.classList.remove("locked");
        }

        return () => {
            document.body.classList.remove("locked");
        };
    }, [isMobileNavOpen, isSearchOpen]);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        if (isSearchOpen) setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isMobileNavOpen) setIsMobileNavOpen(false);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    const toggleDropdown = (id: string) => {
        setExpandedDropdowns(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Add your search logic here
        }
    };

    const MenuItem = ({ href, children, dropdown, dropdownId, items }: any) => {
        const hasDropdown = dropdown && items;
        const isExpanded = expandedDropdowns.includes(dropdownId);

        return (
            <li className={`${hasDropdown ? 'dropdown' : ''} ${isExpanded ? 'expanded' : ''}`}>
                {hasDropdown ? (
                    <>
                        <Link href="#">{children}</Link>
                        <ul style={{ display: isExpanded ? 'block' : '' }}>
                            {items.map((item: any, index: number) => (
                                <MenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <Link href={href} className={isActive(href) ? 'current' : ''}
                        aria-current={isActive(href) ? 'page' : undefined}>
                        {children}
                    </Link>
                )}
            </li>
        );
    };

    const MobileMenuItem = ({ href, children, dropdown, dropdownId, items }: any) => {
        const hasDropdown = dropdown && items;
        const isExpanded = expandedDropdowns.includes(dropdownId);

        return (
            <li className={`${hasDropdown ? 'dropdown' : ''} ${isExpanded ? 'expanded' : ''}`}>
                {hasDropdown ? (
                    <>
                        <Link href="#" rel="nofollow">
                            {children}
                            <button
                                className={`dropdown-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown(dropdownId);
                                }}
                                aria-label="dropdown toggler"
                            >
                                <i className="fa fa-angle-down"></i>
                            </button>
                        </Link>
                        <ul style={{ display: isExpanded ? 'block' : 'none' }}>
                            {items.map((item: any, index: number) => (
                                <MobileMenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <Link href={href} onClick={closeMobileNav}>
                        {children}
                    </Link>
                )}
            </li>
        );
    };

    const menuData = [
        { href: "/", children: "Home" },
        { href: "/about-us", children: "About Us" },
        {
            dropdown: true,
            dropdownId: "pages",
            children: "Pages",
            items: [
                { href: "/team", children: "Team" },
                { href: "/team-details", children: "Team Details" },
                {
                    dropdown: true,
                    dropdownId: "projects",
                    children: "Projects",
                    items: [
                        { href: "/projects", children: "Projects" },
                        { href: "/project-details", children: "Project Details" }
                    ]
                },
                { href: "/testimonials", children: "Testimonials" },
                { href: "/pricing", children: "Pricing" },
                { href: "/faq", children: "Faq" },
                { href: "/404", children: "404 Error" },
                { href: "/coming-soon", children: "Coming Soon" }
            ]
        },
        {
            dropdown: true,
            dropdownId: "services",
            children: "Services",
            items: [
                { href: "/services", children: "Electrician Services" },
                { href: "/electric-panel-repair", children: "Electric Panel Repair" },
                { href: "/short-circuit-repair", children: "Short Circuit Repair" },
                { href: "/commercial-services", children: "Commercial Services" },
                { href: "/installing-ceiling-fan", children: "Installing Ceiling Fan" },
                { href: "/lighting-fixtures", children: "Lighting Fixtures" },
                { href: "/maintenance-service", children: "Maintenance Service" }
            ]
        },
        {
            href: "/blog", children: "Blog"

        },
        { href: "/contact", children: "Contact" }
    ];

    return (
        <>
            <header className="main-header" ref={headerRef} role="banner">
                {/* Top Bar */}
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            {/* Email */}
                            <li>
                                <div className="icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="text header-mail">
                                    <p>
                                        <Link href="mailto:suryaelectrician24@gmail.com" aria-label="Email electrician service">
                                            suryaelectrician24@gmail.com
                                        </Link>
                                    </p>
                                </div>
                            </li>

                            {/* Call */}
                            <li>
                                <div className="icon header-call">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <Link href="tel:+919428654794" aria-label="Call electrician in Surat">
                                            +91 94286 54794
                                        </Link>
                                    </p>
                                </div>
                            </li>

                            {/* Location */}
                            <li>
                                <div className="icon header-map">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="text header-address"
                                    title="G12 Samrat Vihar Complex, Honey Park Rd, Adajan Gam, Adajan,Gujrat - 395009"
                                >
                                    <p>G12 Samrat Vihar Complex, Honey Park Rd, Adajan Gam, Adajan,
                                        Gujarat - 395009</p>
                                </div>
                            </li>
                        </ul>


                        <div className="main-menu__top-right">
                            <div className="main-menu__social">
                                <Link href="https://www.facebook.com/profile.php?id=61585625452664"><i className="icon-facebook"></i></Link>
                                <Link href="https://x.com/suryaelectrician"><i className="icon-xpa"></i></Link>
                                <Link href="https://www.linkedin.com/in/suryaelectrician-suryaelectrician-9385b73a1 "><i className="icon-link-in"></i></Link>
                                <Link href="https://www.instagram.com/suryaelectrician?igsh=bWgzcGh6ZXJ3ZjNv&utm_source=qr"><i className="icon-instagram"></i></Link>

                                {/* Google Business */}
                                <Link href="https://www.google.co.in/search?sca_esv=265768d7d1a792dc&kgmid=%2Fg%2F11zg28vnf_&q=Surya%20Electrician&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3" target="_blank">
                                    <i className="fab fa-google"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Nav */}
                <nav className="main-menu" role="navigation" aria-label="Main navigation">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            {/* Logo + Menu */}
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image
                                            src={Logo}
                                            alt="Electrician Service in Surat"
                                            width={180}
                                            height={60}
                                        />
                                    </Link>
                                </div>

                                <div className="main-menu__main-menu-box">
                                    <Link
                                        href="#"
                                        className="mobile-nav__toggler"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleMobileNav();
                                        }}
                                    >
                                        <i className="fa fa-bars"></i>
                                    </Link>

                                    {/* Desktop Menu */}
                                    <ul className="main-menu__list">
                                        {menuData.map((item, index) => (
                                            <MenuItem key={index} {...item} />
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="main-menu__right">
                                <div className="main-menu__search-and-btn-box">
                                    {/* <div className="main-menu__search-box">
                                        <Link
                                            href="#"
                                            className="main-menu__search search-toggler icon-search-interface-symbol"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleSearch();
                                            }}
                                        ></Link>
                                    </div> */}

                                    <div className="main-menu__btn-box">
                                        <Link href="/contact" className="main-menu__btn thm-btn">
                                            Get a quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Sticky Header */}
            <div className={`stricky-header stricked-menu main-menu ${isSticky ? 'stricky-fixed' : ''}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link href="/">
                                            <Image
                                                src={Logo}
                                                alt="logo"
                                                width={150}
                                                height={50}
                                            />
                                        </Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link
                                            href="#"
                                            className="mobile-nav__toggler"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleMobileNav();
                                            }}
                                        >
                                            <i className="fa fa-bars"></i>
                                        </Link>

                                        {/* Desktop Menu */}
                                        <ul className="main-menu__list">
                                            {menuData.map((item, index) => (
                                                <MenuItem key={index} {...item} />
                                            ))}
                                        </ul>
                                    </div>

                                </div>

                                <div className="main-menu__right">
                                    <div className="main-menu__search-and-btn-box">
                                        {/* <div className="main-menu__search-box">
                                            <Link
                                                href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleSearch();
                                                }}
                                            ></Link>
                                        </div> */}

                                        <div className="main-menu__btn-box">
                                            <Link href="/contact" className="main-menu__btn thm-btn">
                                                Get a quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav__wrapper ${isMobileNavOpen ? 'expanded' : ''}`}>
                <div
                    className="mobile-nav__overlay mobile-nav__toggler"
                    onClick={toggleMobileNav}
                ></div>

                <div className="mobile-nav__content">
                    <span
                        className="mobile-nav__close mobile-nav__toggler"
                        onClick={toggleMobileNav}
                    >
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image">
                            <Image
                                src={LogoFooter}
                                width={140}
                                height={50}
                                alt="Electrician service logo"
                            />
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            {menuData.map((item, index) => (
                                <MobileMenuItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:suryaelectrician24@gmail.com">suryaelectrician24@gmail.com</Link>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <Link href="tel:+919428654794">+91 942133314</Link>
                        </li>
                    </ul>

                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link
                                href="https://x.com/suryaelectrician"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                aria-label="suryaelectrician Twitter Profile"
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>

                            <Link
                                href="https://www.facebook.com/profile.php?id=61585625452664"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                aria-label="suryaelectrician Facebook Page"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/suryaelectrician-suryaelectrician-9385b73a1"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                aria-label="suryaelectrician LinkedIn Profile"
                            >
                                <i className="icon-link-in"></i>
                            </Link>

                            <Link
                                href="https://www.instagram.com/suryaelectrician"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                aria-label="suryaelectrician Instagram Profile"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            {/* Google Business */}
                            <Link href="https://www.google.co.in/search?sca_esv=265768d7d1a792dc&kgmid=%2Fg%2F11zg28vnf_&q=Surya%20Electrician&shem=epsd1%2Cltae%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3" target="_blank">
                                <i className="fab fa-google"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Popup */}
            <div className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
                <div
                    className="search-popup__overlay search-toggler"
                    onClick={toggleSearch}
                ></div>

                <div className="search-popup__content">
                    <div className="search-form-wrapper">
                        <label htmlFor="search" className="sr-only">
                            search here
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search Here..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <button
                            onClick={handleSearch}
                            aria-label="search submit"
                            className="thm-btn"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <Link
                href="#"
                className="scroll-to-target scroll-to-top"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <span className="scroll-to-top__wrapper">
                    <span className="scroll-to-top__inner"></span>
                </span>
                <span className="scroll-to-top__text">Go Back Top</span>
            </Link>


        </>
    );
}
