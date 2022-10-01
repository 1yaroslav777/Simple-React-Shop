const Drawer = (props) => {
return(
    <div  className="overlay">
    <div className="drawer">
    <h2 className="mb-30 d-flex justify-between ">Cart<img onClick={props.onCloseClick} className="removeBtn cu-p" src="/imgs/btn-remove.svg" alt="Close" /></h2>

    <div className="items">
      <div className="cartItem d-flex align-center">
        <img className="mr-20" width={90} height={90} src="/imgs/Sneakers/s1.jpg" alt="Sneakers" />
        <div className="mr-20">
          <p className="mb-5">Nike SB Charge Mid Canvas</p>
          <b>300$</b>
        </div>
        <img className="removeBtn" src="/imgs/btn-remove.svg" alt="Remove" />
      </div>
      <div className="cartItem d-flex align-center mb-20">
        <img className="mr-20" width={90} height={90} src="/imgs/Sneakers/s1.jpg" alt="Sneakers" />
        <div className="mr-20">
          <p className="mb-5">Nike SB Charge Mid Canvas</p>
          <b>300$</b>
        </div>
        <img className="removeBtn" src="/imgs/btn-remove.svg" alt="Remove" />
      </div>
    </div>
    <div className="cartTotalBlock">
      <ul>
        <li >
          <span>Total:</span>
          <div></div>
          <b>800$</b>
        </li>
        <li >
          <span>Fees 5%</span>
          <div></div>
          <b>40$</b>
        </li>
      </ul>
      <button className="greenButton">Confirm order <img src="/imgs/arrow.svg" alt="Arrow" /></button>
    </div>


  </div>
  </div>
)
}

export default Drawer;