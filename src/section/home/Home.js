import { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [navOpac, setNavOpac] = useState(false);
  const [opac, setOpac] = useState(0);

  const quitNav = () => {
    setToggle(false);
  };

  return (
    <>
      {toggle ? (
        <>
          <div className={styles.navBg}>
            {navOpac ? (
              <div className={styles.navText}>
                <a className={styles.navHome} href="#Home" onClick={quitNav}>
                  Home
                </a>
                <a className={styles.navIntro} href="#About" onClick={quitNav}>
                  About Me
                </a>
                <a className={styles.navStack} href="#Stack" onClick={quitNav}>
                  Skills
                </a>
                <a
                  className={styles.navPort}
                  href="#Portfolio"
                  onClick={quitNav}
                >
                  Portfolio
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

      <div className={styles.container} id="Home">
        <h1 style={{ color: "#102A3F" }}>안녕하세요</h1>
        <h1 style={{ color: "#102A3F" }}>프론트엔드 개발자</h1>
        <h1 style={{ color: "#102A3F" }}>
          <span style={{ fontSize: 70 }}>이광규</span> 포트폴리오입니다.
        </h1>
      </div>
    </>
  );
}
