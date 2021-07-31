import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    margin-top: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    border-bottom: 1px solid var(--DarkGray);
    background-color: var(--primary);
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);
    img{
      width: 350px;
      height: 60px;
    }
    div {
      display: flex;
      align-items: center;

      > span {
        color: var(--color-text);
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
`;
export const ShoppingCart = styled(AiOutlineShoppingCart)`
  font-size: 30px;
  margin-right: 10px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: var(--dark);
  }
`;