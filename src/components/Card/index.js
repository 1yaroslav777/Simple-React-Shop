import React from 'react';
import styles from './Card.module.scss';


const Card = ({onFavorite,onPlus, title, imageUrl, price}) =>{
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () =>{
      onPlus({title, imageUrl, price});
      setIsAdded(!isAdded);
    }
    return(
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/imgs/heart-unliked.svg" alt="Unliked" onClick={onFavorite} />
        </div>
        <img width={133} height={120} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column  ">
            <span>Price:</span>
            <b>{price}$</b>
          </div>
          
            <img className={styles.plus} onClick = {onClickPlus} src={ isAdded ? '/imgs/btn-checked.svg': '/imgs/btn-plus.svg'} alt="Plus"  />
          
        </div>
      </div>
    )
}


export default Card;


