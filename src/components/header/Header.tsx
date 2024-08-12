import { BsBookmarkHeart } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { useState } from "react";

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const { favorites } = useFavorites();
  console.log(favorites);
  return (
    <header className={styles.header}>
      {showModal && (
        <div className={styles.modal}>
          <p>
            {favorites.length === 0
              ? "Favorites is empty"
              : favorites.map((item) => item.name).join(", ")}
          </p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
      <div onClick={openModal}>
        <BsBookmarkHeart fontSize={40} />
        <span className={styles.span}>{favorites.length}</span>
      </div>
    </header>
  );
}
