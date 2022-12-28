import React from "react";
import styles from "./styles.module.scss";

const Modal = ({ setOpen }) => {
  return (
    <div id={styles.openModal} className={styles.modal}>
      <div className={styles.modal_dialog}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h3 className={styles.modal_title}>Добавить поле характеристик</h3>
            <button
            
              onClick={() => setOpen(false)}
              className={styles.close}
            >
              ×
            </button>
          </div>
          <div className={styles.modal_body}>
            <div className={styles.input_block}>
              <div className={styles.input_item}>
                <span>Адрес доставки</span>
                <input type="text" />
              </div>
              <div className={styles.input_item}>
                <span>Формат поля</span>
                <input type="text" />
              </div>
            </div>
            <div className={styles.blue_btn}>
              <button>Добавить поле</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
