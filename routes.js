const axios = require('axios');
const express = require('express');
const routes = express.Router();

routes.get('/api/pokemons/:poke_name', async function(req, res){
    await axios.get("https://pokeapi.co/api/v2/pokemon/"+req.params.poke_name)
        .then(function (response) {
            let aux_poke_abilities = response.data.abilities;
            let poke_abilities=[];
            aux_poke_abilities.map(value =>{
                poke_abilities.push(value.ability.name)
            })
            res.send(poke_abilities.sort()).status(response.status)
        })
        .catch(function (error) {
            res.send({info:"Não encontrado."}).status(500)
        })
})

module.exports = routes;