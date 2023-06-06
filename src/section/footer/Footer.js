import styles from "./Footer.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={styles.footerContainer}
      data-aos-anchors="#Project"
      data-aos="fade-up"
    >
      <div className={styles.iconArea}>
        <a className={styles.footer_phone} href="tel:010-7116-8694"></a>
        <a
          className={styles.footer_email}
          href="mailto:clckflxh90@naver.com"
        ></a>
        <a
          className={styles.footer_git}
          href="https://github.com/sweetChilee"
        ></a>
        <a
          className={styles.footer_notion}
          href="https://flicker-pound-41e.notion.site/1c58c929fb9c4753878b9e31ec995579"
        ></a>
      </div>
      <div className={styles.navArea}>
        <a className={styles.footer_home} href="#Home">
          Home
        </a>
        <a className={styles.footer_about} href="#About">
          About Me
        </a>
        <a className={styles.footer_skill} href="#Skill">
          Skills
        </a>
        <a className={styles.footer_projects} href="#Project">
          Projects
        </a>
        <div>ⓒ 2023. Lee Gwang Gyu's Portfolio</div>
      </div>
    </div>
  );
}
