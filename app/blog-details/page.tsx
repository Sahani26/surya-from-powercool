import CTA from '@/public/components/CTA'
import Footer from '@/public/components/Footer'
import Header from '@/public/components/Header'
import Link from 'next/link'
import React from 'react'

export default function blogdetails() {
  return (
    <>

      <Header />
      <>
        {/*Page Header Start*/}
        <section className="page-header">
          <div className="page-header__shape-1">
            <img src="assets/images/shapes/page-header-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="page-header__inner">
              <div className="page-header__img-1">
                <img src="assets/images/resources/page-header-img-1.png" alt="" />
              </div>
              <h3>Blog Details</h3>
              <div className="thm-breadcrumb__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span className="icon-angle-right" />
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Page Header End*/}
        {/*Blog Details Start*/}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img">
                    <img src="assets/images/blog/blog-details-img-1.jpg" alt="" />
                    <div className="blog-details__date">
                      <p>
                        12
                        <br />
                        Nov
                      </p>
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <div className="blog-details__user-and-meta">
                      <div className="blog-details__user">
                        <p>
                          <span className="icon-user" />
                          By Admin
                        </p>
                      </div>
                      <ul className="blog-details__meta list-unstyled">
                        <li>
                          <Link href="#">
                            <span className="icon-speech-bubbles" />
                            Comments (05)
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="icon-clock" />4 Min Read
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-details__title">
                      Electrical Safety Tips from a Surat Electrician
                    </h3>
                    <p className="blog-details__text-1">
                      Learn how to keep your home and business safe with practical
                      electrician advice from our Surat service team. This article
                      covers how to identify common wiring problems, avoid frequent
                      breaker trips, and choose the right electrical repairs.
                    </p>
                    <p className="blog-details__text-2">
                      Regular maintenance and prompt repairs are the best way to
                      prevent electrical hazards. Our experienced electricians
                      recommend checking wiring, switches, and load distribution
                      before small issues become costly failures.
                    </p>
                    <div className="blog-details__author-box">
                      <h4 className="blog-details__author-text">
                        “We focus on safe and reliable electrical service so Surat
                        homeowners and business owners can trust their systems every
                        day.”
                      </h4>
                      <p className="blog-details__author-name">
                        surya electrician<span> / Expert Electrician Team</span>
                      </p>
                    </div>
                    <h3 className="blog-details__title-2">
                      What to Do When Your Circuit Breaker Trips
                    </h3>
                    <p className="blog-details__text-3">
                      If your breaker trips often, it usually means your circuit is
                      overloaded or there is a wiring fault. Avoid DIY repairs and
                      call a certified electrician to inspect the circuit, replace
                      bad breakers, and balance the load safely.
                    </p>
                    <div className="blog-details__img-box">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="blog-details__img-box-img">
                            <img
                              src="assets/images/blog/blog-details-img-box-img-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="blog-details__img-box-img">
                            <img
                              src="assets/images/blog/blog-details-img-box-img-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-details__tag-and-share">
                      <div className="blog-details__tag">
                        <h3 className="blog-details__tag-title">Tags :</h3>
                        <ul className="blog-details__tag-list list-unstyled">
                          <li>
                            <Link href="#">Analysis</Link>
                          </li>
                          <li>
                            <Link href="#">Planning</Link>
                          </li>
                          <li>
                            <Link href="#">Management</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-details__share-box">
                        <h3 className="blog-details__share-title">Share :</h3>
                        <div className="blog-details__share">
                          <Link href="#">
                            <span className="icon-facebook" />
                          </Link>
                          <Link href="#">
                            <span className="icon-xpa" />
                          </Link>
                          <Link href="#">
                            <span className="icon-link-in" />
                          </Link>
                          <Link href="#">
                            <span className="icon-instagram" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one">
                      <div className="comment-one__single">
                        <div className="comment-one__image">
                          <img src="assets/images/blog/comment-1-1.jpg" alt="" />
                        </div>
                        <div className="comment-one__content">
                          <h3>Akshat Dalal</h3>
                          <span>02 June 2024 at 03:30 pm</span>
                          <p>
                            The wise man therefore always holds in these matters to
                            this principle of selection. He rejects pleasures to
                            secure other greater pleasures, or else he endures pains
                            to avoid worse pains to the selection point. But in
                            certain to all this circumstances
                          </p>
                          <div className="comment-one__btn-box">
                            <Link href="/blog-details" className="comment-one__btn">
                              <span className="icon-share-alt" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="comment-one__single">
                        <div className="comment-one__image">
                          <img src="assets/images/blog/comment-1-2.jpg" alt="" />
                        </div>
                        <div className="comment-one__content">
                          <h3>Kevin Rana</h3>
                          <span>02 June 2024 at 03:30 pm</span>
                          <p>
                            The wise man therefore always holds in these matters to
                            this principle of selection. He rejects pleasures to
                            secure other greater pleasures, or else he endures pains
                            to avoid worse pains to the selection point. But in
                            certain to all this circumstances
                          </p>
                          <div className="comment-one__btn-box">
                            <Link href="/blog-details" className="comment-one__btn">
                              <span className="icon-share-alt" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form">
                      <h3 className="comment-form__title">Leave A Comment</h3>
                      <p className="comment-form__text">
                        By using form u agree with the message sorage, you can contact
                        us directly now
                      </p>
                      <form
                        action="assets/inc/sendemail.php"
                        className="comment-one__form contact-form-validated"

                      >
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="comment-form__input-box">
                              <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__input-box text-message-box">
                              <textarea
                                name="message"
                                placeholder="Write your messege"
                                defaultValue={""}
                              />
                            </div>
                            <div className="comment-form__btn-box">
                              <button
                                type="submit"
                                className="thm-btn comment-form__btn"
                              >
                                submit now
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="result" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                      <input type="search" placeholder="Search here" />
                      <button type="submit">
                        <i className="icon-search-interface-symbol" />
                      </button>
                    </form>
                  </div>
                  <div className="sidebar__single sidebar__all-category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__all-category-list list-unstyled">
                      <li>
                        <Link href="#">
                          Industrial service<span>(04)</span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="#">
                          residential service<span>(06)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Commercial services<span>(02)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          power solution<span>(04)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          upgrade old wiring<span>(07)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Our Latest Post</h3>
                    <ul className="sidebar__post-list list-unstyled">
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <p className="sidebar__post-date">02 June 2024</p>
                          <h3>
                            <Link href="/blog-details">
                              Greater Pleasures or The Selection
                            </Link>
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <p className="sidebar__post-date">02 June 2024</p>
                          <h3>
                            <Link href="/blog-details">
                              He pleasures to secure greater
                            </Link>
                          </h3>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image">
                          <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                        </div>
                        <div className="sidebar__post-content">
                          <p className="sidebar__post-date">02 June 2024</p>
                          <h3>
                            <Link href="/blog-details">
                              worse pains to the selection point.
                            </Link>
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Popular Tags</h3>
                    <div className="sidebar__tags-list">
                      <Link href="#">Growth Accelerator</Link>
                      <Link href="#">Management</Link>
                      <Link href="#">Analysis</Link>
                      <Link href="#">Planning</Link>
                      <Link href="#">Advisory Service</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Blog Details End*/}
      </>
      <CTA />
      <Footer />
    </>
  )
}

 
