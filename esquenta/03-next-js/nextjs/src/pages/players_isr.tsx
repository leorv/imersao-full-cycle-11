import axios from "axios";
import { GetStaticProps } from "next";
import { Player } from "../utils/models";

type PlayersListProps = {
    players: Player[];
}

const PlayersListIncrementalStaticRegenerationPage = (props: PlayersListProps) => {
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
                {players.map((player, key) => (
                    <li key={key} >{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PlayersListIncrementalStaticRegenerationPage;

export const getStaticProps: GetStaticProps = async (context) => {
    // Meio termo, melhor dos dois mundos.
    // Quando convém atualizar de tempos em tempos.
    console.log('Executou GetStaticProps.');

    const { data } = await axios.get('http://localhost:8000/players');
    console.log(data);

    return {
        props: { players: data },
        revalidate: 5
    }
}