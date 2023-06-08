import { useState } from "react";
import styles from "./Home.module.css";
import HomeScroll from "./HomeScroll";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [navOpac, setNavOpac] = useState(false);
  const [opac, setOpac] = useState(0);

  return (
    <div style={{ overflow: "hidden" }} id="Home">
      {toggle ? (
        <>
          <div className={styles.navBg}>
            {navOpac ? (
              <div className={styles.navText}>
                <a className={styles.navHome} href="#Home">
                  Home
                </a>
                <a className={styles.navIntro} href="#About">
                  About Me
                </a>
                <a className={styles.navStack} href="#Skill">
                  Skill
                </a>
                <a className={styles.navPort} href="#Project">
                  Projects
                </a>
              </div>
            ) : null}
          </div>

          <div
            className={styles.burger}
            onClick={() => {
              setNavOpac(false);
              setToggle((prev) => !prev);
              setOpac(1);
            }}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.navBgDis} style={{ opacity: opac }}></div>
          <div
            className={styles.burger}
            onClick={() => {
              setToggle((prev) => !prev);
              setTimeout(() => {
                setNavOpac(true);
              }, 500);
            }}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </>
      )}
      <HomeScroll />
    </div>
  );
}
