import { useState } from "react";
import styles from "./PortfolioPage.module.css";

export default function PortfolioPage(props) {
  const [visibleModal, setVisibleModal] = useState(false);

  const styleHidden = () => {
    document.body.style.overflow = "hidden";
  };
  const removeHidden = () => {
    document.body.style.removeProperty("overflow");
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.BG_Color }}
    >
      {visibleModal && (
        <div className={styles.overlay}>
          <div
            className={
              props.display === "web"
                ? styles.overlayContainer_Web
                : styles.overlayContainer_App
            }
          >
            <button
              style={{
                position: "absolute",
                right: 0,
                backgroundColor: "transparent",
                border: "none",
                margin: 10,
                fontSize: 24,
                fontWeight: 600,
                color: props.titleColor,
                cursor: "pointer",
              }}
              onClick={() => {
                setVisibleModal(false);
                removeHidden();
              }}
            >
              ⓧ
            </button>
            {props.visibleDetailView}
          </div>
        </div>
      )}
      <div className={styles.previewContainer}>
        <div className={styles.previewInnerContainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              className={styles.skillsHashTag}
              style={{ color: props.titleColor }}
            >
              #
            </span>
            <a
              className={styles.skillsTitle}
              href="#Portfolio"
              style={{ color: props.titleColor }}
            >
              Project
            </a>
          </div>
          <div
            className={
              props.display === "web"
                ? styles.carouselContainer
                : styles.carouselContainer_App
            }
          >
            {props.visibleCarousel}
          </div>
        </div>
        <div className={styles.projectExContainer}>
          <div
            className={styles.innerExContainer}
            style={{ color: props.textColor }}
          >
            <div className={styles.titles}>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>▎Title</div>
                <div className={styles.title_Text}>{props.title}</div>
              </div>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>▎Role</div>
                <div className={styles.title_Text}>{props.role}</div>
              </div>
              <div className={styles.titles_TitleArea}>
                <div className={styles.title_Title}>▎Skills</div>
                <div className={styles.skillContainer}>{props.skill}</div>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles._detailEx}>
                <p className={styles._detailEx_Text}>{props.explanation}</p>
              </div>
              <div
                className={styles.readBtnArea}
                onClick={() => {
                  setVisibleModal(true);
                  styleHidden();
                }}
              >
                {props.btnStyles}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
