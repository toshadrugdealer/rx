import { BsBookmarkHeart } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";

export function Header() {
  const { favorites } = useFavorites();
  return (
    <header className={styles.header}>
      <BsBookmarkHeart fontSize={40} />
      <span>{favorites.length}</span>
    </header>
  );
}
