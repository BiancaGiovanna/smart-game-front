import GoogleMapReact from "google-map-react";
import Qrcode from "qrcode.react";
import {useEffect, useState} from "react";
import api from "../../services/api";
import {Modal} from "../Modal";
import {Available, Description, GameBuy, GameDetails, GoogleMap, StoreMap} from "../Modal/style";
import {Container, GameCard} from "./style";

export default function Card() {
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadGames = async () => {
    const response = await api.get("/game");
    setGames(response.data);
  };

  useEffect(() => {
    loadGames();
  }, []);

  const handleModal = async (e) => {
    setShowModal(true);
    setGameId(e);
  };
  return (
    <>
      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>
          <GameDetails>
            <GameBuy>
              <div>
                <img src={gameId.image} alt="game" />
              </div>
              {/* <section>
                {gameId.Plataforms.map((plataform) => (
                  <h3>{plataform.name}</h3>
                ))}
              </section> */}
              <section>
                <h1>R${gameId.price.toFixed(2)}</h1>
                <button>COMPRAR</button>
                <article>
                  <Qrcode value={`${gameId.id}`} size={100} />
                </article>
              </section>
            </GameBuy>
            <Description>
              <header>
                <h1>Descrição</h1>
              </header>
              <section>
                <p>{gameId.description}</p>
              </section>
            </Description>

            <Available>
              <header>
                <h1>Lojas</h1>
              </header>
              <section>
                {gameId.Stores.map((store) => (
                  <GoogleMap>
                    <h1>{store.place}</h1>
                    <StoreMap>
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "",
                        }}
                        defaultCenter={{
                          lat: store.latitude,
                          lng: store.longitude,
                        }}
                        defaultZoom={15}
                      ></GoogleMapReact>
                    </StoreMap>
                  </GoogleMap>
                ))}
              </section>
            </Available>
          </GameDetails>
        </Modal>
      )}
      <Container>
        {games.map((game) => (
          <GameCard onClick={() => handleModal(game)}>
            <header>
              <img src={game.image} alt="banner"></img>
            </header>
            <section>
              <span>{game.name}</span>
            </section>
            <footer>
              <button>R${game.price.toFixed(2)}</button>
            </footer>
          </GameCard>))
        }
      </Container >
    </>
  )
}