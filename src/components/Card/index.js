import React from 'react';
import styles from './Card.module.scss';


const Card = (props) =>{
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () =>{
      setIsAdded(!isAdded);
    }
    return(
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/imgs/heart-unliked.svg" alt="Unliked" onClick={props.onFavorite} />
        </div>
        <img width={133} height={120} src={props.imageUrl} alt="Sneakers" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column  ">
            <span>Price:</span>
            <b>{props.price}$</b>
          </div>
          
            <img className={styles.plus} onClick = {onClickPlus} src={ isAdded ? '/imgs/btn-checked.svg': '/imgs/btn-plus.svg'} alt="Plus"  />
          
        </div>
      </div>
    )
}


export default Card;


