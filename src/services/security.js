
export const getGame = () => {
    const { game } = JSON.parse(localStorage.getItem());
  
    return game;
  };