import React from "react";
import styles from "./styles.module.scss";

import Slider from "@mui/material/Slider";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
function Profile() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([0, 10000]);
  console.log(value);
  function valuetext(value) {
    return `${value}°$`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeValue = (number, status) => {
    const num = Number(number);
    if (status === "start") {
      setValue((arr) => [...arr.slice(0, 0), num, ...arr.slice(0 + 1)]);
    } else {
      setValue((arr) => [...arr.slice(0, 1), num, ...arr.slice(1 + 1)]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h4>Создание запроса</h4>
        </div>
        <div className={styles.input_block}>
        <div className={styles.input_block_item}><Input text="Желаемое количество" /></div>
          <div className={styles.input_block_item}><Input text="Категории" /></div>
        </div>
        <div onClick={() => setOpen((prev) => !prev)} className={styles.btn}>
          <box-icon name="plus" color="#234eea"></box-icon>
          <span>Добавить поле характеристик</span>
        </div>
        <div className={styles.text}>
          <span>Подробное описание товара</span>
          <textarea name="text"></textarea>
        </div>

        <div className={styles.range}>
          <Slider
            max={1000}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </div>
        <div className={styles.priceAndDate}>
          <div className={styles.price_inputs}>
            <div className={styles.input_item}>
              <span>Цена от</span>
              <input
                value={value[0]}
                onChange={(e) => handleChangeValue(e.target.value, "start")}
                type="text"
              />
            </div>
            <div className={styles.input_item}>
              <span>Цена до</span>
              <input
                value={value[1]}
                onChange={(e) => handleChangeValue(e.target.value, "end")}
                type="text"
              />
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.date_item}><Input text="Дата получения" /></div>
            <div className={styles.date_item}><Input text="Желамое количество" /></div>
          </div>
        </div>
        <div className={styles.delivery}>
          <div className={styles.input_item}>
            <span>Адрес доставки</span>
            <input type="text" />
          </div>
          <div className={styles.input_item}>
            <span>Состояние</span>
            <input type="text" />
          </div>
        </div>
        <div className={styles.btn_group}>
          <div className={styles.blue_btn}>
            <button>Создать запрос</button>
          </div>
          <div className={styles.download_btn}>
            <div className={styles.download_file}>
              <box-icon name="download" color="#586eef"></box-icon>
              <span>Загрузить документ</span>
            </div>
            <div className={styles.download_file}>
              <box-icon name="photo-album" color="#586eef"></box-icon>
              <span>Загрузить фото</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}

export default Profile;
