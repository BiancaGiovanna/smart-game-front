import styled from "styled-components";

export const Container = styled.div`
  width: 1100px;
  height: 900px;
  /* padding-bottom: 15px; */

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-items: center;
  margin-top: 10px;
  margin-bottom: 120px;



`;
export const GameCard = styled.article`
  width: 250px;
  height: 400px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 90px;
  cursor: pointer;

  
  > header {
    width: 100%;
    display: flex;
    align-items: center;
    
    
    > img {
      width: 100%;
      height: 250px;
      border-radius: 20px 20px 0px 0;

    }
  }
  > section {
    width: 100%;
    margin-left: 20px;
    margin: 10px 0px 30px 25px; 
    font-size: 18px;
    border-color: var(--card);
    align-items: center;
    justify-content: center;
    text-align: left;
    span{
      color: var(--light);
    }
  }

  > footer {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      border-radius: 10px;
      width: 90%;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      color: var(--light);
    }
  }
`;