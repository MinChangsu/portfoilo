import Carousel, { CarouselItem } from "../../carousel/Carousel";
import styles from "./SixmanCarousel.module.css";

export default function SixmanCarousel() {
  return (
    <Carousel>
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
    </Carousel>
  );
}
