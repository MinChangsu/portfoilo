import CarouselItem from "../CarouselItem";
import KCarousel from "./KCarousel";
import styles from "./KioskCarousel.module.css";

export default function KioskCarousel() {
  return (
    <KCarousel>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </CarouselItem>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </CarouselItem>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </CarouselItem>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </CarouselItem>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </CarouselItem>
      <CarouselItem display={"App"}>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </CarouselItem>
    </KCarousel>
  );
}
