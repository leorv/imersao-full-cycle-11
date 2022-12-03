import axios from "axios";
import { GetServerSideProps } from "next";
import { Player } from "../utils/models";

// Um componente React recebe propriedades:

type PlayersListProps = {
    players: Player[];
}


const PlayersListPage = (props: PlayersListProps) => {

    const { players } = props;
    console.log(players);

    if (players == undefined) {
        return (
            <div>
                <h2>Jogadores indefinidos, erro ao buscar jogadores.</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Jogadores disponíveis</h1>
            <ul>
                { players.map((player, key) => (
                    <li key={key} >{ player.name }</li>
                )) }
            </ul>
        </div>
    );
}

export default PlayersListPage;


// Para que o next entenda, o nome tem que ser exatamente esse.
// Não pode mudar. getServerSideProps

export const getServerSideProps: GetServerSideProps = async (context) => {

    // este trecho é executado apenas no servidor.
    console.log('Executou getServerSideProps.');

    const { data } = await axios.get('http://localhost:8000/players');
    console.log(data);

    return {
        props: { players: data }
    }
}