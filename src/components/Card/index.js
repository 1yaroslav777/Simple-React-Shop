import styles from './Card.module.scss';


const Card = (props) =>{
    const onClickButton = () => {
        alert(props.title)
    }

    return(
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/imgs/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={120} src={props.imageUrl} alt="Sneakers" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column  ">
            <span>Price:</span>
            <b>{props.price}$</b>
          </div>
          <button className="button" onClick = {onClickButton}>
            <img width={11} height={11} src="/imgs/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    )
}


export default Card;


