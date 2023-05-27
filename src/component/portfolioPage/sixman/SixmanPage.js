import SixmanCarousel from "./SixmanCarousel";
import styles from "./SixmanPage.module.css";

export default function SixmanPage() {
  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewInnerContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={styles.skillsHashTag}>#</span>
          <a className={styles.skillsTitle} href="#Portfolio">
            Project
          </a>
        </div>
        <div className={styles.carouselContainer}>
          <SixmanCarousel />
        </div>
      </div>
      <div className={styles.projectExContainer}></div>
    </div>
  );
}
