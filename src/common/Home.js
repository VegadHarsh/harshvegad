import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/style.css";
import "../CSS/customize.css";
import "../CSS/elegant-icons.css";
import "../CSS/flaticon.css";
import "../CSS/magnific-popup.css";
import "../CSS/slicknav.min.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { Link } from 'react-router-dom';
import Loader from './js/Loader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faFacebookF, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faUsersCog, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin as fabSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
import "magnific-popup";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const Home = () => {

    useEffect(() => {
        document.querySelectorAll(".set-bg[data-setbg]").forEach((element) => {
            const bg = element.getAttribute("data-setbg");
            if (bg) {
                element.style.backgroundImage = `url(${bg})`;
            }
        });
    }, []);


    // Latest Blog Section
    const options = {
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000, // Auto-scroll every 3 seconds
        autoplaySpeed: 1000, // Smooth transition speed (1 second)
        smartSpeed: 1000, // Smooth slide transition
        autoplayHoverPause: true, // Pause on hover
        dotsEach: 2, // Show 3 dots max
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
        },
    };

    const blogs = [
        {
            title: "The Importance of Responsive Design in Modern Web Development",
            description:
                "In today's digital age, ensuring your website looks great on all devices is crucial. Responsive design enhances user experience and boosts SEO. It's no longer an option, but a necessity.",
        },
        {
            title: "Best Practices for Managing Website Content",
            description:
                "Effective content management is key to keeping your website relevant and engaging. Discover strategies for organizing and updating content efficiently to keep your audience interested.",
        },
        {
            title: "How to Optimize Website Performance for Better User Experience",
            description:
                "Website performance plays a critical role in user satisfaction. Learn tips and techniques for speeding up your website and reducing load times to improve user engagement and retention.",
        },
        {
            title: "The Role of SEO in Website Development",
            description:
                "SEO is integral to driving traffic to your website. Understand the basics of SEO and how to implement effective strategies during the development phase to enhance your site's visibility.",
        },
        {
            title: "Understanding Web Accessibility and Its Benefits",
            description:
                "Web accessibility ensures that your website is usable by everyone, including people with disabilities. Learn why accessibility is important and how to achieve it for a more inclusive web.",
        },
        {
            title: "Choosing the Right Web Hosting Service for Your Needs",
            description:
                "Selecting the best web hosting service is crucial for your website's performance and reliability. Explore different hosting options and find the perfect fit for your needs to ensure optimal uptime and speed.",
        },
    ];

    gsap.registerPlugin(ScrollTrigger);

    // Counter Section
    const counters = [
        { id: 1, img: "img/icons/ci-1.png", number: 35, text: "Completed Projects", suffix: "+" },
        { id: 2, img: "img/icons/ci-2.png", number: 99, text: "Happy Clients", suffix: ".99%" },
        { id: 3, img: "img/icons/ci-3.png", number: 20, text: "Perspective Clients", suffix: "+" },
        { id: 4, img: "img/icons/ci-4.png", number: 2, text: "Years of Expertise", suffix: "+" }
    ];

    const counterRefs = useRef([]);

    useEffect(() => {
        counterRefs.current.forEach((counter, index) => {
            gsap.fromTo(
                counter,
                { innerText: 0 },
                {
                    innerText: counters[index].number,
                    duration: 2,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 90%", // Triggers when section is in view
                        once: true
                    },
                    onUpdate: function () {
                        counter.innerText = Math.ceil(this.targets()[0].innerText) + counters[index].suffix;
                    }
                }
            );
        });
    }, []);

    // Popup in work section
    useEffect(() => {
        $(".img-popup").magnificPopup({
            type: "image",
            closeOnContentClick: true,
            image: {
                verticalFit: false, // Prevents image from fitting window height
            },
        });
    }, []);

    useEffect(() => {
        const grid = document.querySelector(".work__gallery");

        if (grid) {
            const masonry = new Masonry(grid, {
                itemSelector: ".work__item",
                columnWidth: ".grid-sizer",
                gutter: 10,
            });

            // Ensure Masonry layout runs correctly after images are loaded
            imagesLoaded(grid, () => {
                masonry.layout();
            });

            // Cleanup on unmount
            return () => {
                masonry.destroy();
            };
        }
    }, []);

    return (
        <>
            <Loader />

            {/* <!-- Hero Section Begin --> */}
            <section className="hero" id="main-sec-hero">
                <div className="Logo_set">
                    <Link to="/home" className="my_logo d-flex justify-content-center"><img className="fw-bold HR_LOGO"
                        src="./img/HR_logo1.png" alt="HR logo" /></Link>
                </div>
                <div className="hero__slider owl-carousel">
                    <div className="hero__item set-bg" data-setbg="img/hero/i2.jpg">
                        <div className="container t_di_chan">
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 first_hero">
                                        <div className="main_hed_content">
                                            <div className="hero__text">
                                                <span>For website and management</span>
                                                <h2>Hi there, I'm Harsh</h2>
                                                <div className="link_follow_for_more d-flex">
                                                    <div className="link_provide_for_follow">
                                                        <Link to="https://www.linkedin.com/in/harsh-vegad-8a9b9824b" target="_blank" className="follow_link follow_3">
                                                            <FontAwesomeIcon icon={faLinkedinIn} className='follow_link_i' />
                                                        </Link>
                                                        <Link to="https://www.facebook.com/harsh.vegad.16?mibextid=JRoKGi" target="_blank" className="follow_link follow_2">
                                                            <FontAwesomeIcon icon={faFacebookF} className='follow_link_i' />
                                                        </Link>
                                                        {/* <Link to="https://www.instagram.com/harshvegad1?igsh=MWZ5dHJ5dDUycThyNg==" target="_blank" className="follow_link follow_4">
                                                            <FontAwesomeIcon icon={faInstagram} className='follow_link_i' />
                                                        </Link> */}
                                                        <Link to="https://t.me/HR_BULL" target="_blank" className="follow_link follow_1">
                                                            <FontAwesomeIcon icon={faTelegramPlane} className='follow_link_i' />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to="/about" className="primary-btn">See more about me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 my_image">
                                        <img src="img/hero/HR3.png" alt="my-image"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg" data-setbg="img/hero/i2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 second_hero">
                                    <div className="hero__text">
                                        <span>For website and management</span>
                                        <h4>I specialize in creating user-friendly, business-centric websites that enhance your
                                            online presence and drive results.
                                        </h4>
                                        <h4>With a focus on design and functionality, I work collaboratively to transform your
                                            vision into a compelling digital experience.
                                        </h4>
                                        {/* <Link to="../HR-Vegad/about.html" className="primary-btn">See more about me</a> */}
                                        <Link to="/about" className="primary-btn">See more about me</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 my_image my_image2">
                                    <img src="img/hero/HR3.png" alt="my-image"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg" data-setbg="img/hero/i2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 second_hero">
                                    <div className="hero__text">
                                        <span>For website and management</span>
                                        <h4>Let's connect to create a website that reflects your brand's unique identity and
                                            meets your business objectives effectively.</h4>
                                        <h4>I am dedicated to transforming your vision into a compelling digital experience that
                                            stands out in the competitive online landscape.</h4>
                                        <Link to="/about" className="primary-btn">See more about me
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 my_image my_image2">
                                    <img src="img/hero/HR3.png" alt="my-image"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End --> */}

            {/* <!-- Services Section Begin --> */}
            <section className="services spad">
                <div className="container animate-on-scroll-left">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="services__title">
                                <div className="section-title">
                                    <span>Our services</span>
                                    <h2 className='I_do_sec'>What I do?</h2>
                                </div>
                                <p>If you need web development services, you will get a dedicated professional committed to
                                    creating a custom website that elevates your business. I focus on understanding your unique
                                    requirements and delivering a product that exceeds expectations.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item cust_align_content">
                                        <div className="services__item__icon">
                                            <FontAwesomeIcon icon={faServer} className="i_cons i_cons_1" />
                                        </div>
                                        <h4>Professional Web Development</h4>
                                        <p> I create user-friendly, responsive websites that achieve your digital goals. My expertise ensures your site is visually appealing and functional.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item cust_align_content">
                                        <div className="services__item__icon">
                                            <FontAwesomeIcon
                                                icon={faUsersCog}
                                                className="i_cons i_cons_1"
                                            />
                                        </div>
                                        <h4>Custom Solutions</h4>
                                        <p>Every business is unique, so I offer tailored web development solutions. Let's create a website that truly represents your brand.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item cust_align_content">
                                        <div className="services__item__icon">
                                            <FontAwesomeIcon
                                                icon={fabSearchengin}
                                                className="i_cons i_cons_1"
                                            />
                                        </div>
                                        <h4>SEO Optimization</h4>
                                        <p>Improve your website's visibility on search engines with optimized structure and content. I focus on making your site faster, more accessible, and easier to find.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item cust_align_content">
                                        <div className="services__item__icon">
                                            <div className="icons_set w-100">
                                                <FontAwesomeIcon icon={faLaptop} className="i_cons i_cons_l" />
                                                <FontAwesomeIcon icon={faMobile} className="i_cons i_cons_r" />
                                            </div>
                                        </div>
                                        <h4>Responsive and Mobile-Friendly</h4>
                                        <p>Your website will look great on all devices. I ensure a smooth, mobile-friendly experience for users on desktops, tablets, and smartphones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section End --> */}

            {/* <!-- Work Section Begin --> */}
            <section className="work">
                <div className="work__gallery animate-on-scroll position-relative">
                    <div className="grid-sizer"></div>

                    <div className="work__item wide__item set-bg" style={{ backgroundImage: "url(img/work/Business-1.jpg)" }}>
                        <Link to="img/work/Business.jpg" className="play-btn img-popup" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                        <div className="work__item__hover">
                            <h4>Business & Service</h4>
                            <ul>
                                <li>eCommerce</li>
                                <li>Business</li>
                            </ul>
                        </div>
                    </div>

                    <div className="work__item small__item set-bg" style={{ backgroundImage: "url(img/work/shady_oak-1.jpg)" }}>
                        <Link to="img/work/shady_oak.jpg" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                    </div>

                    <div className="work__item small__item set-bg" style={{ backgroundImage: "url(img/work/website-2.jpg)" }}>
                        <Link to="img/work/website2.png" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                    </div>

                    <div className="work__item large__item set-bg" style={{ backgroundImage: "url(img/work/mental-mojo-1.jpg)" }}>
                        <Link to="img/work/mental-mojo.jpg" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                        <div className="work__item__hover">
                            <h4>Business & Service</h4>
                            <ul>
                                <li>eCommerce</li>
                                <li>Business</li>
                            </ul>
                        </div>
                    </div>

                    <div className="work__item small__item set-bg" style={{ backgroundImage: "url(img/work/website-3.jpg)" }}>
                        <Link to="img/work/website3.png" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                    </div>

                    <div className="work__item small__item set-bg" style={{ backgroundImage: "url(img/work/website_1.jpg)" }}>
                        <Link to="img/work/website1.png" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                    </div>

                    <div className="work__item wide__item set-bg" style={{ backgroundImage: "url(img/work/i-reveal-1.jpg)" }}>
                        <Link to="img/work/i-reveal.jpg" className="play-btn img-popup">
                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                        </Link>
                        <div className="work__item__hover">
                            <h4>Business & Service</h4>
                            <ul>
                                <li>eCommerce</li>
                                <li>Business</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Work Section End --> */}

            {/* <!-- Counter Section Begin --> */}
            <section className="counter">
                <div className="container animate-on-scroll-zoom" data-animation="zoomIn">
                    <div className="counter__content">
                        <div className="row">
                            {counters.map((item, i) => (
                                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 client_sec">
                                    <div className={`counter__item ${item.id === 2 ? "second__item" : ""} 
                                    ${item.id === 3 ? "third__item" : ""} 
                                    ${item.id === 4 ? "four__item" : ""}`}>
                                        <div className="counter__item__text">
                                            <img src={item.img} alt="" />
                                            <h2 ref={(el) => (counterRefs.current[i] = el)} className="counter_num">
                                                0{item.suffix}
                                            </h2>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Counter Section End --> */}

            {/* <!-- Latest Blog Section Begin --> */}
            <section className="latest spad">
                <div className="container animate-on-scroll-left">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-title">
                                <span>Our Blog</span>
                                <h2>Blog Update</h2>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className="latest__slider owl-carousel" {...options}>
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog__item latest__item">
                                <h4>{blog.title}</h4>
                                <p>{blog.description}</p>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            {/* <!-- Latest Blog Section End --> */}

            {/* <!-- Call To Action Section Begin --> */}
            <section className="callto spad set-bg" data-setbg="img/team-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="callto__text">
                                <h2>Enhancing Business Web Presence with Precision & Expertise</h2>
                                <p>Dedicated to crafting refined and engaging business web solutions that drive growth and efficiency. Let’s connect and collaborate.</p>
                                <Link to="/contact" className='contact_business'>
                                    {"CONTACT ME".split("").map((char, index) => (
                                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Call To Action Section End --> */}
        </>
    )
}

export default Home;
