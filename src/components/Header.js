const Header = (props) => {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/imgs/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Shop</h3>
            <p className="opacity-5">Best shop ever</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onCartClick} className="mr-30 opacity-8 cu-p"><img width={20} height={20} src="/imgs/cart.svg" alt="CartIcon"/><span>1500$</span></li>
          <li className="opacity-8"><img width={20} height={20} src="/imgs/user.svg" alt="UserIcon"/></li>
        </ul>
      </header>
    )
}

export default Header;