const Drawer = ({onCloseClick,items = []}) => {
return(
    <div  className="overlay">
    <div className="drawer">
    <h2 className="mb-30 d-flex justify-between ">Cart<img onClick={onCloseClick} className="removeBtn cu-p" src="/imgs/btn-remove.svg" alt="Close" /></h2>

    <div className="items">
      {
        items.map(obj => (
        <div className="cartItem d-flex align-left mb-20">
        <div style={{backgroundImage:`url(${obj.imageUrl})`}}
        className ="cartItemImg"
        ></div>
        <div className="mr-20 flex">
          <p className="mb-5">{obj.title}</p>
          <b>{obj.price} $</b>
        </div>
        <img className="removeBtn" src="/imgs/btn-remove.svg" alt="Remove" />
      </div>
      ))
      }
      
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