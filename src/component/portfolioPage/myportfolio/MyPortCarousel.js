import styles from "./MyPortCarousel.module.css";
import PCarousel, { PCarouselItem } from "./PCarousel";

export default function MyPortCarousel() {
  return (
    <PCarousel>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </PCarouselItem>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </PCarouselItem>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </PCarouselItem>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </PCarouselItem>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </PCarouselItem>
      <PCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </PCarouselItem>
    </PCarousel>
  );
}
