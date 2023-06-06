import CarouselItem from "../CarouselItem";
import PCarousel from "./PCarousel";
import styles from "./MyPortCarousel.module.css";

export default function MyPortCarousel() {
  return (
    <PCarousel>
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
    </PCarousel>
  );
}
