import ACarousel from "./ACarousel";
import CarouselItem from "../CarouselItem";
import styles from "./AllToCarousel.module.css";

export default function AllToCarousel() {
  return (
    <ACarousel>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </CarouselItem>
    </ACarousel>
  );
}
