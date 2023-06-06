import React, { useEffect } from "react";
import styles from "./MyInfo.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyInfo() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.bgColor} id="About">
      <div
        className={styles.container}
        data-aos-anchors="#About"
        data-aos="zoom-out"
        data-aos-duration={500}
      >
        <div className={styles.photoArea}>
          <div
            style={{ display: "flex", alignItems: "center" }}
            data-aos-anchors="#About"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <span className={styles.aboutMeHashTag}>#</span>
            <a className={styles.aboutMeTitle} href="#About">
              About Me
            </a>
          </div>
          <div
            className={styles.profilePhoto}
            data-aos-anchors="#About"
            data-aos="fade-right"
            data-aos-duration={500}
          ></div>
          <div className={styles.porfileIcon} data-aos-anchors="#About">
            <a
              className={styles.phone}
              href="tel:010-7116-8694"
              data-aos-anchors="#About"
              data-aos="zoom-in"
              data-aos-duration={500}
            ></a>
            <a
              className={styles.email}
              href="mailto:clckflxh90@naver.com"
              data-aos-anchors="#About"
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={50}
            ></a>
            <a
              className={styles.gitHub}
              href="https://github.com/sweetChilee"
              data-aos-anchors="#About"
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={100}
            ></a>
            <a
              className={styles.notion}
              href="https://flicker-pound-41e.notion.site/1c58c929fb9c4753878b9e31ec995579"
              data-aos-anchors="#About"
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={150}
            ></a>
          </div>
        </div>
        <div className={styles.infoArea}>
          <p className={styles.infoTexts}>
            <h2
              className={styles.infoTexts_2}
              data-aos="slide-up"
              data-aos-duration={500}
            >
              「 끊임없이 노력하는 」
              <span className={styles.name}> 이광규 </span>
              입니다.
            </h2>
            <p data-aos="slide-left" data-aos-duration={500}>
              책임감이 강해서 맡은 일은 끝까지 완수해요! <br />
              타인으로부터 ‘성실하다’ 혹은 ‘배움이 빠르다’ 등의 말을 자주
              듣곤해요!
            </p>
            <h2 data-aos="slide-left" data-aos-duration={500}>
              🗨️ 목표를 향한 지속적인 전진
            </h2>
            <p data-aos="slide-left" data-aos-duration={500}>
              자신만의 엄격한 기준치나 목표치를 설정해놓고 <br />
              거기에 도달하지 못했거나 만족하지 못하다고 생각이 들면 포기하지
              않고 지속적으로 목표치를 달성하려고 해요. <br />
              만약 목표치를 달성하더라도 부족한 부분은 없는지 다시 되돌아보는
              시간을 가진답니다.
            </p>
            <h2 data-aos="slide-left" data-aos-duration={500}>
              🗨️ 변화를 두려워 하지 않는 자세
            </h2>
            <p data-aos="slide-left" data-aos-duration={500}>
              기존 방식을 무조건적으로 고수하지 않고 상황에 맞는 유연한 대처를
              하기 위해 노력해요. <br />
              이를 위해 학습이 필요한 경우 마다하지 않고 공부를 하는 자세를
              겸비하고 있어요.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
