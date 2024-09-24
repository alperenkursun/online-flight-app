// import CSS styles
import styles from "./styles.module.css";

// import libraries and components
import React, { useState } from "react";
import { Container, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import images
import profile from "../../assets/images/profile.webp";

const Header = () => {
  // State management
  const [mobileMenu, setMobileMenu] = useState(true);

  // Toggle mobile menu
  const toggleMenu = () => setMobileMenu((prevState) => !prevState);

  return (
    <header className={styles.header}>
      <Container maxW="1124px" className={styles.headerInner}>
        <Link to="/" className={styles.left}>
          <div>
            <i className="fa-solid fa-plane"></i>
          </div>
          <span>PLANE SCAPE</span>
        </Link>
        <nav className={styles.right}>
          {/* Mobile Menu Toggle Button */}
          <i
            className={`fa-solid fa-bars ${styles.mobileButton} ${
              styles.mobileMenuButton
            } ${mobileMenu && styles.active}`}
            onClick={toggleMenu}
          ></i>

          {/* Menu Items */}
          <ul
            className={`${styles.mobileMenuContent} ${
              !mobileMenu && styles.active
            }`}
          >
            <li>
              <Link to="/myflights">
                <i className="fa-solid fa-tags"></i>
                <span>Deals</span>
              </Link>
            </li>
            <li>
              <Link to="/myflights">
                <i className="fa-solid fa-earth-americas"></i>
                <span>Discover</span>
              </Link>
            </li>
            <li>
              <a
                href="https://alperenkursun.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  src={profile}
                  alt="Profile Image"
                  loading="lazy"
                  objectFit="cover"
                  width={31}
                  height={31}
                  borderRadius="full"
                  background="red"
                />
                <span>Alperen Kurşun</span>
              </a>
            </li>
            {/* Mobile Menu Close Button */}
            <i
              className={`fa-solid fa-xmark ${styles.mobileButton} ${
                styles.mobileCloseButton
              } ${!mobileMenu && styles.active}`}
              onClick={toggleMenu}
            ></i>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
