import styles from "./CarouselItem.module.css";
export default function CarouselItem({ children, width, display }) {
  return (
    <div
      className={
        display === "App" ? styles.carousel_item_App : styles.carousel_item
      }
      style={{ width: width }}
    >
      {children}
    </div>
  );
}
