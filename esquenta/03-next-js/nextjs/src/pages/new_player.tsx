import React from "react"
import axios from "axios";

export const PlayerPage = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //@ts-expect-error
        const name = e.currentTarget.name.value;

        const response = await axios.post('http://localhost:3000/api/new_player', { name });
        alert('Cadastrou jogador.');
    }




    return (
        <div>
            <h1>Cadastrar novo jogador</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nome do jogador" />
                <button>Cadastrar</button>
            </form>
        </div>
    )
}