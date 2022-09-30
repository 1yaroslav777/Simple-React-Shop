const Card = () =>{
    return(
        <div className="card">
        <div className="favorite">
          <img src="/imgs/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={120} src="/imgs/s1.jpg" alt="Sneakers" />
        <h5>Nike SB Charge Mid Canvas</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column  ">
            <span>Price:</span>
            <b>300$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/imgs/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    )
}


export default Card;


