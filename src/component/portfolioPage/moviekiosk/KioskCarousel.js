import KCarousel, { KCarouselItem } from "./KCarousel";
import styles from "./KioskCarousel.module.css";

export default function KioskCarousel() {
  return (
    <KCarousel>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </KCarouselItem>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </KCarouselItem>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </KCarouselItem>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </KCarouselItem>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </KCarouselItem>
      <KCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </KCarouselItem>
    </KCarousel>
  );
}
