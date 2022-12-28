import React from 'react';
import styles from "./styles.module.scss"
const Input = ({text}) => {
    return (
            <div className={styles.input_item}>
              <span>{text}</span>
              <input type="text" />
            </div>
        
    );
};

export default Input;