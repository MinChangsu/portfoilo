import styles from "./HomeScroll.module.css";

import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";

export default function HomeScroll() {
  return (
    <ScrollContainer className={styles.container} id="Home">
      <ScrollPage>
        <Animator animation={batch(Sticky(), ZoomOut(), Fade())}>
          <h1 className={styles.fadeHi}>안녕하세요</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(Sticky(), Fade(), MoveIn(0, 1000), MoveOut())}
        >
          <h1 className={styles.name}>이광규의</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(Sticky(), Fade(), MoveIn(0, 1000), MoveOut())}
        >
          <h1 className={styles.name}>포트폴리오입니다.</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage className={styles.container}>
        <div className={styles.areaContainer}>
          <div className={styles.areaBar}>
            <Animator animation={batch(MoveIn(-1000, 0), MoveOut(-1500, 0))}>
              <div className={styles.areaBar_text}>
                About Me Projects Skills About Me Projects Skills About Me
                Projects Skills About Me Projects Skills About Me Projects
                Skills About Me Projects Skills About Me Projects Skills About
                Me Projects Skills
              </div>
            </Animator>
          </div>
        </div>
        <h2
          style={{
            color: "#102A3F",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Animator
            animation={(StickyIn(), FadeIn(), ZoomIn())}
            className={styles.contentTitle}
          >
            Contents
          </Animator>
          <Animator
            animation={MoveOut(-1000, 0)}
            className={styles.contentText}
          >
            About Me
          </Animator>
          <Animator animation={MoveOut(1000, 0)} className={styles.contentText}>
            Skills
          </Animator>
          <Animator
            animation={MoveOut(-1000, 0)}
            className={styles.contentText}
          >
            Projects
          </Animator>
        </h2>
      </ScrollPage>
      <div className={styles.areaContainer}>
        <div className={styles.areaBar}>
          <Animator animation={batch(MoveIn(-1000, 0), MoveOut(1500, 0))}>
            <div className={styles.areaBar_text}>
              About Me Projects Skills About Me Projects Skills About Me
              Projects Skills About Me Projects Skills About Me Projects Skills
              About Me Projects Skills About Me Projects Skills About Me
              Projects Skills
            </div>
          </Animator>
        </div>
      </div>
    </ScrollContainer>
  );
}
