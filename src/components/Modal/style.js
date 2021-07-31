import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9; 

  background-color: #42424250;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ModalContainer = styled.section`
  width: 90%;
  height: 80%;
  max-height: calc(100vh - 20px);
  padding: 20px;
  background-color: var(--primary);

  z-index: 19;

  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 2s;

    :hover {
      color: var(--primary);
    }
  }
`;

export const GameDetails = styled.div`
  min-width: 300px;
  width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  
  flex-direction: column;
  margin-top: 90px;
`;
export const GameBuy = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  align-items: center;
  >div{
    width: 50%;
    display: flex;
    img{
      width: 80%;
      border-radius: 10px;
    }
  }

  > section {
    width: 40%;
    height: 80%;
    margin-left: 20px;
    background-color: var(--secondary);
    text-align: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > div {
      height: 50px;
      display: flex;
      align-items: center;

      > div {
        width: 120px;
        height: 40px;
        padding: 5px;
        padding-top: 10px;
        text-align: center;
        background-color: var(--primary);
        border-radius: 10px;
        color: var(--light);
        margin-left: 15px;
      }
    }
    article {
      width: 150px;
      height: 150px;
      align-self: center;
      margin-top: 20px;
    }
    > h1 {
      font-size: 22px;
      color: white;
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    > button {
      width: 200px;
      height: 50px;
      color: white;
      font-weight: 700;
      border-radius: 5px;
    }
  }
/* 
   */
`;

export const Description = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: var(--secondary);
  display: flex;
  padding: 0 20px;
  margin: 20px;
  justify-content:center;
  border-radius: 10px;

  text-align: justify;
  flex-direction: column;
  > header {
    height: 50px;
    text-align: left;

    > h1 {
      font-size: 28px;
    }
  }
`;
export const Available = styled.div`
  width: 100%;
  border-top: solid 3px var(--primary);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;

  > header {
    height: 50px;
    text-align: left;

    > h1 {
      font-size: 28px;
    }
  }
  > section {
    width: 100%;
    height: 800px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
export const GoogleMap = styled.div`
  width: 100%;
  height: 350px;
  
  background-color: var(--primary);
  text-align: center;
  border-radius: 5px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--light);
  margin-left: 10px;
  margin-bottom: 50px;
`;

export const StoreMap = styled.div`
  width: 100%;
  height: 100%;
`;
