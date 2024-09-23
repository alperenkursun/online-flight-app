// Import CSS styles
import styles from "./styles.module.css";

// Import necessary libraries and hooks
import React, { useState } from "react";
import { Container, Img } from "@chakra-ui/react";

// Import images
import profile from "../../assets/images/profile.webp";

function Header() {
  // State management
  const [mobileMenu, setMobileMenu] = useState(true);

  // Function definitions
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className={styles.header}>
      <Container maxW="1124px" className={styles.headerInner}>
        <a href="/#" className={styles.left}>
          <div>
            <i class="fa-solid fa-plane"></i>
          </div>
          <span>PLANE SCAPE</span>
        </a>
        <nav className={styles.right}>
          <i
            className={`fa-solid fa-bars ${styles.mobileButton} ${
              styles.mobileMenuButton
            } && ${mobileMenu && styles.active} `}
            onClick={toggleMenu}
          ></i>

          <ul
            className={`${styles.mobileMenuContent} ${
              !mobileMenu && styles.active
            }`}
          >
            <li>
              <a href="/#">
                <i class="fa-solid fa-tags"></i>
                <span>Deals</span>
              </a>
            </li>
            <li>
              <a href="/#">
                <i class="fa-solid fa-earth-americas"></i>
                <span>Discover</span>
              </a>
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
                  borderRadius="100%"
                  background={"red"}
                />
                <span>Alperen Kurşun</span>
              </a>
            </li>
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
}

export default Header;
