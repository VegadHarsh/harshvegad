import React, { useEffect } from 'react';
import $ from 'jquery';
import mixitup from 'mixitup';
import Loader from './js/Loader';
import Breadcrumb from './methods/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Masonry from "masonry-layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "magnific-popup";
import "../CSS/magnific-popup.css";
import imagesLoaded from "imagesloaded";


function Projects() {

    useEffect(() => {
        document.querySelectorAll(".set-bg[data-setbg]").forEach((element) => {
            const bg = element.getAttribute("data-setbg");
            if (bg) {
                element.style.backgroundImage = `url(${bg})`;
            }
        });
    }, []);

    useEffect(() => {
        // Hide loader on component mount
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        // Portfolio filter active class toggle
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });

        // Initialize MixItUp if the gallery exists
        if ($('.portfolio__gallery').length > 0) {
            const containerEl = document.querySelector('.portfolio__gallery');
            mixitup(containerEl);
        }

        // Cleanup: Remove click event listeners on unmount
        return () => {
            $('.portfolio__filter li').off('click');
        };
    }, []);


    const portfolioItems = [
        {
            category: 'branding',
            image: 'img/portfolio/digital-web-1.jpg',
            link: 'img/portfolio/digital-web.jpg',
            title: 'Business Consulting',
            tags: ['Business', 'Management'],
        },
        {
            category: 'ecommerce',
            image: 'img/work/mental-mojo-1.jpg',
            link: 'img/work/mental-mojo.jpg',
            title: 'Mental Mojo',
            tags: ['Product', 'eCommerce'],
        },
        {
            category: 'digital-marketing',
            image: 'img/work/i-reveal-1.jpg',
            link: 'img/work/i-reveal.jpg',
            title: 'VIP Auto Tires & Service',
            tags: ['eCommerce', 'Management'],
        },
        {
            category: 'branding',
            image: 'img/portfolio/saymode-1.png',
            link: 'img/portfolio/sysmode.jpg',
            title: 'Sysmode Business Innovators',
            tags: ['Business', 'Brading'],
        }, 
        {
            category: 'branding',
            image: 'img/portfolio/Real-Estate_1.png',
            link: 'img/portfolio/Real-Estest.jpg',
            title: 'Real Estate Business Hub',
            tags: ['Real Estate', 'Development'],
        },
        {
            category: 'digital-marketing',
            image: 'img/work/shady_oak-1.jpg',
            link: 'img/work/shady_oak.jpg',
            title: 'Shady Oak School',
            tags: ['School', 'Education'],
        },
        {
            category: 'helth',
            image: 'img/portfolio/gym.jpg',
            link: 'img/portfolio/gym-1.jpg',
            title: 'FitLife Gym',
            tags: ['Gym', 'Fitness'],
        }, 
        {
            category: 'branding',
            image: 'img/work/Business-1.jpg',
            link: 'img/work/Business.jpg',
            title: 'Business Solutions',
            tags: ['Business', 'Consulting'],
        },
        {
            category: 'ecommerce',
            image: 'img/portfolio/Real-estate-1.png',
            link: 'img/portfolio/Real-estate.png',
            title: 'Innovative E-commerce Real Estate Solutions',
            tags: ['Real Estate', 'eCommerce'],
        },
        {
            category: 'helth',
            image: 'img/work/website-2.jpg',
            link: 'img/work/website2.png',
            title: 'Healthcare Clinic',
            tags: ['Doctor', 'Healthcare'],
        },
        {
            category: 'helth',
            image: 'img/work/website1.png',
            link: 'img/work/website1.png',
            title: 'Healthcare Clinic',
            tags: ['Doctor', 'Healthcare'],
        },
    ];

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

            {/* Breadcrumb Section */}
            <>
                <Breadcrumb title="My Projects" path={["Project"]} />
            </>
            {/* <!-- Breadcrumb End --> */}

            <section className="portfolio spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="portfolio__filter">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".branding">Business</li>
                                <li data-filter=".helth">Health</li>
                                <li data-filter=".digital-marketing">Digital Marketing</li>
                                <li data-filter=".ecommerce">eCommerce</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio__gallery">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 col-sm-6 mix ${item.category}`}>
                                <div className="portfolio__item">
                                    <div
                                        className="portfolio__item__pics set-bg"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <a href={item.link} className="play-btn img-popup" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faPlay} style={{ color: "gray" }} />
                                        </a>
                                    </div>
                                    <div className="portfolio__item__text">
                                        <h4>{item.title}</h4>
                                        <ul>
                                            {item.tags.map((tag, tagIndex) => (
                                                <li key={tagIndex}>{tag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects
