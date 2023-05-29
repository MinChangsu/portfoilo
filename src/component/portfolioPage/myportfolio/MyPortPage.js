import MyPortCarousel from "./MyPortCarousel";
import styles from "./MyPortPage.module.css";

export default function MyPortPage() {
  return (
    <div className={styles.container}>
      <div className={styles.previewContainer}>
        <div className={styles.previewInnerContainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className={styles.skillsHashTag}>#</span>
            <a className={styles.skillsTitle} href="#Portfolio">
              Project
            </a>
          </div>
          <div className={styles.carouselContainer}>
            <MyPortCarousel />
          </div>
        </div>
        <div className={styles.projectExContainer}>
          <div className={styles.innerExContainer}>
            <div className={styles.titles}>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>Title</div>
                <div className={styles.title_Text}>
                  Personal Prj - My Portfolio
                </div>
              </div>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>Role</div>
                <div className={styles.title_Text}>Frontend</div>
              </div>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>Skills</div>
                <div className={styles.skillContainer}>
                  <div className={styles.reactJs}></div>
                  <div className={styles.css}></div>
                  <div className={styles._figma}></div>
                </div>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles._detailEx}>
                <p style={{ fontSize: 18, lineHeight: 2 }}>
                  학원에서 처음으로 진행해본 팀 프로젝트입니다. 본 프로젝트를
                  진행하면서 HTML, CSS, JavaScript를 사용해봄으로써 <br />
                  웹 개발의 기본 지식을 쌓을 수 있었고 프론트 엔드 분야에 매력을
                  느끼고 <br />
                  본격적으로 시작하게 된 계기가 되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
