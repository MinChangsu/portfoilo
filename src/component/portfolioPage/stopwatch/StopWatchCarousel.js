import StCarousel, { StCarouselItem } from "./StCarousel";
import styles from "./StopWatchCarousel.module.css";

export default function StopWatchCarousel() {
  return (
    <StCarousel>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </StCarouselItem>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </StCarouselItem>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </StCarouselItem>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </StCarouselItem>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </StCarouselItem>
      <StCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </StCarouselItem>
    </StCarousel>
  );
}
