import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        isSidebarOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    },
    [isSidebarOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      <header className="header">
        <section className={`section_header ${isSidebarOpen ? "active" : "nav_bar"}`}>
          <div className="nav_manu" ref={navMenuRef}>
            <div className="nav_bar_contents container mt-2">
              <nav>
                <Link to="/" className='hr_simbol' onClick={toggleSidebar}>
                  <img
                    className="fw-bold Simbol_Name_design"
                    src="./img/HR_logo1.png"
                    alt="HR logo"
                    />
                </Link>
                <div className="hamburger_menu" ref={hamburgerRef} onClick={toggleSidebar}>MENU</div>
                <ul className={`main_links`}>
                  <li className="menu_bar">
                    <Link to="/" className="home_part" onClick={closeSidebar}>
                      <div className="Home_y">
                        <div>H</div>
                        <div>O</div>
                        <div>M</div>
                        <div>E</div>
                      </div>
                      <div className="Home_y">
                        <div>H</div>
                        <div>O</div>
                        <div>M</div>
                        <div>E</div>
                      </div>
                    </Link>
                  </li>
                  <li className="menu_bar">
                    <Link to="/about" className="home_part" onClick={closeSidebar}>
                      <div className="Home_y">
                        <div>A</div>
                        <div>B</div>
                        <div>O</div>
                        <div>U</div>
                        <div>T</div>
                      </div>
                      <div className="Home_y">
                        <div>A</div>
                        <div>B</div>
                        <div>O</div>
                        <div>U</div>
                        <div>T</div>
                      </div>
                    </Link>
                  </li>
                  {/* <li className="menu_bar">
                    <Link to="#Services" className="home_part" onClick={closeSidebar}>
                      <div className="Home_y">
                        <div>S</div>
                        <div>E</div>
                        <div>R</div>
                        <div>V</div>
                        <div>I</div>
                        <div>C</div>
                        <div>E</div>
                        <div>S</div>
                      </div>
                      <div className="Home_y">
                        <div>S</div>
                        <div>E</div>
                        <div>R</div>
                        <div>V</div>
                        <div>I</div>
                        <div>C</div>
                        <div>E</div>
                        <div>S</div>
                      </div>
                    </Link>
                  </li> */}
                  <li className="menu_bar">
                    <Link to="/projects" className="home_part" onClick={closeSidebar}>
                      <div className="Home_y">
                        <div>P</div>
                        <div>R</div>
                        <div>O</div>
                        <div>J</div>
                        <div>E</div>
                        <div>C</div>
                        <div>T</div>
                        <div>S</div>
                      </div>
                      <div className="Home_y">
                        <div>P</div>
                        <div>R</div>
                        <div>O</div>
                        <div>J</div>
                        <div>E</div>
                        <div>C</div>
                        <div>T</div>
                        <div>S</div>
                      </div>
                    </Link>
                  </li>
                  <li className="menu_bar">
                    <Link to="/contact" className="home_part" onClick={closeSidebar}>
                      <div className="Home_y">
                        <div>C</div>
                        <div>O</div>
                        <div>N</div>
                        <div>T</div>
                        <div>A</div>
                        <div>C</div>
                        <div>T</div>
                      </div>
                      <div className="Home_y">
                        <div>C</div>
                        <div>O</div>
                        <div>N</div>
                        <div>T</div>
                        <div>A</div>
                        <div>C</div>
                        <div>T</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="details mt-5 mr-2 ml-2">
              <div className="follow d-flex justify-content-between">
                <div className="follow_me">
                  <p className="m-0">FOLLOW</p>
                  <p className="m-0">(HARSH®)</p>
                </div>
                <div className="my_links w-25">
                  <div className="target_link">
                    <Link to="https://t.me/HR_BULL" target="_blank" className="f_link follow_1 d-flex" rel="noopener noreferrer" onClick={closeSidebar}>
                      TELEGRAM <span>&gt;</span>
                    </Link>
                    <Link to="https://www.facebook.com/harsh.vegad.16?mibextid=JRoKGi" target="_blank" className="f_link follow_2 d-flex" rel="noopener noreferrer" onClick={closeSidebar}>
                      FACEBOOK <span>&gt;</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/harsh-vegad-8a9b9824b" target="_blank" className="f_link follow_3 d-flex" rel="noopener noreferrer" onClick={closeSidebar}>
                      LINKEDIN <span>&gt;</span>
                    </Link>
                    {/* <Link to="https://www.instagram.com/harshvegad1?igsh=MWZ5dHJ5dDUycThyNg==" target="_blank" className="f_link follow_4 d-flex" rel="noopener noreferrer" onClick={closeSidebar}>
                      INSTAGRAM <span>&gt;</span>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="follow d-flex justify-content-between get_touch">
                <div className="follow_me d-flex align-items-center">
                  <p>GET IN TOUCH</p>
                </div>
                <div className="email_link w-25">
                  <Link to="mailto:harshvegad911@gmail.com" onClick={closeSidebar}>EMAIL <span>&gt;</span></Link>
                </div>
              </div>
              <div className="follow d-flex justify-content-between align-items-center mb-3">
                <div className="follow_me">
                  <p>BUSINESS NUMBER</p>
                </div>
                <div className="w-25 professional_num">
                  <p>7984285538</p>
                </div>
              </div>
              {/* <div className="follow">
                <div className="add_ress p-1">
                  <Link
                    to="https://www.google.com/maps/place/Khodiyar+Bike+Care/@23.0772399,72.5380497,3a,75y,18.01h,90.44t/am=t/data=!3m7!1e1!3m5!1scO2rDRJPGaMJDjwsf9LEpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DcO2rDRJPGaMJDjwsf9LEpQ%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D18.006449285999132%26pitch%3D-0.4430839575571497%26thumbfov%3D90!7i13312!8i6656!4m20!1m13!4m12!1m4!2m2!1d72.5323136!2d23.1156533!4e1!1m6!1m2!1s0x395e83382801f1a9:0x8488f24800742a3c!2sChanakyapuri,+Ahmedabad,+Gujarat!2m2!1d72.5368554!2d23.0787852!3m5!1s0x395e8335e621ab4b:0xcf12ea2f746421f5!8m2!3d23.0772929!4d72.53809!16s%2Fg%2F11gh95qstc?authuser=0&coh=205410&entry=ttu"
                  >
                    3GGQ+W68, SHAYONA CITY, CHANAKYAPURI, AHMEDABAD, GUJARAT 380061, INDIA
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
