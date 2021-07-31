import {HeaderContainer, ShoppingCart} from './style';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <div>
        <ShoppingCart alt="cart" />
      </div>
    </HeaderContainer>
  )
}
export default Header;