import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import Loader from './js/Loader';
import Breadcrumb from './methods/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";

function About() {

    useEffect(() => {
        document.querySelectorAll(".set-bg[data-setbg]").forEach((element) => {
            const bg = element.getAttribute("data-setbg");
            if (bg) {
                element.style.backgroundImage = `url(${bg})`;
            }
        });
    }, []);

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

    return (
        <>
            <Loader />
            {/* <!-- Breadcrumb Begin --> */}
            <>
                <Breadcrumb title="About Me" path={["About"]} />
            </>
            {/* <!-- Breadcrumb End -->

                <!-- About Section Begin --> */}
            <section className="about spad animate-on-scroll">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about__pic">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="about__pic__item about__pic__item--large set-bg"
                                            data-setbg="img/about/larger_i2.jpg"></div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="about__pic__item set-bg" data-setbg="img/about/28.jpg"></div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="about__pic__item set-bg" data-setbg="img/about/web-img-3.jpg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__text">
                                <div className="section-title">
                                    <span>About</span>
                                    <h2>WHo I am?</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="services__item">
                                            <div class="services__item__icon">
                                                <FontAwesomeIcon icon={faServer} className="i_cons i_cons_1" />
                                            </div>
                                            <h4>Professional Web Development</h4>
                                            <p> I create user-friendly, responsive websites that achieve your digital goals. My
                                                expertise ensures your site is visually appealing and functional.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="services__item">
                                            <div className="services__item__icon">
                                                <div className="icons_set w-100">
                                                    <FontAwesomeIcon icon={faLaptop} className="i_cons i_cons_l" />
                                                    <FontAwesomeIcon icon={faMobile} className="i_cons i_cons_r" />
                                                </div>
                                            </div>
                                            <h4>Responsive and Mobile-Friendly</h4>
                                            <p>Your website will look great on all devices. I ensure a smooth, mobile-friendly
                                                experience for users on desktops, tablets, and smartphones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__text__desc">
                                    <p>I excel in developing responsive and dynamic websites that effectively represent your brand and engage your audience.
                                        By prioritizing both aesthetics and performance, I ensure your website is not only visually appealing but also user-friendly and efficient</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Section End -->

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

            {/* <!-- Team Section Begin --> */}
            <section className="team spad set-bg" data-setbg="img/team-bg.jpg">
                <div className="container animate-on-scroll">
                    <div className="row">
                        <div className="freelance-services">
                            <div className="container">
                                <div className="freelance-intro">
                                    <h2>Freelance Web Development</h2>
                                    <p>As a freelancer in web development, I offer personalized services to bring
                                        your online projects to life. I specialize in creating custom websites and
                                        web applications tailored to your needs.</p>
                                </div>
                                <div className="services-list">
                                    <div className="col-lg-6 d-flex align-items-center">
                                        <img src="img/about/freelance-img.png" alt="freelance"></img>
                                    </div>
                                    <div className="col-lg-5 service-item">
                                        <p>Build and Manage Websites</p>
                                        <p>Update Web Hosting Services</p>
                                        <p>Create Unique and Engaging Websites</p>
                                        <p>Provide Ongoing Website Support</p>
                                        <p>Ensure Responsive Design</p>
                                        <p>Optimize Website Performance</p>
                                        <p>Manage Website Content Effectively</p>
                                        <p>Improve Web Hosting for Better Performance</p>
                                        <p>Develop User-Friendly Website Experiences</p>
                                        <p>Comprehensive Website Management</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Team Section End --> */}
        </>
    )
}

export default About;
