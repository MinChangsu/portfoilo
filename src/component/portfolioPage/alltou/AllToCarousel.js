import styles from "./AllToCarousel.module.css";
import ACarousel, { ACarouselItem } from "./ACarousel";

export default function AllToCarousel() {
  return (
    <ACarousel>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </ACarouselItem>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </ACarouselItem>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </ACarouselItem>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </ACarouselItem>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </ACarouselItem>
      <ACarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </ACarouselItem>
    </ACarousel>
  );
}
