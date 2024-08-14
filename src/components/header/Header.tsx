import { BsBookmarkHeart } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { ChangeEvent, useState } from "react";

export function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputModal, setInputModal] = useState<string>("");
  const openModal = () => {
    setShowModal(true);
  };
  const { favorites } = useFavorites();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputModal(event.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
    setInputModal("");
  };
  return (
    <header className={styles.header}>
      {showModal && (
        <div className={styles.modal}>
          <div>
            {favorites.length === 0
              ? "Favorites is empty"
              : favorites.map((item) => (
                  <div key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={150}
                      height={90}
                    />
                    <h4>{item.name}</h4>
                  </div>
                ))}
          </div>
          <input
            type="text"
            placeholder="какой то инпут"
            value={inputModal}
            onChange={handleInputChange}
          />
          <p>{inputModal}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
      <div onClick={openModal}>
        <BsBookmarkHeart fontSize={40} />
        <span className={styles.span}>{favorites.length}</span>
      </div>
    </header>
  );
}
