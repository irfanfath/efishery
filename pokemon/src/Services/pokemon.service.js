import {
    Chain
  } from "./graphql-zeus"
  
  const chain = Chain("https://graphql-pokemon.now.sh")
  
  const getAll = async (page) => {
    const {
      pokemons
    } = await chain.Query({
      pokemons: [{
        first: page * 10
      }, {
        id: true,
        number: true,
        name: true,
        image: true,
        types: true,
        classification: true,
        resistant: true,
        weaknesses: true,
        maxCP: true,
        maxHP: true,
      }]
    })
    console.log(pokemons)
    return pokemons
  }
  
  const getPoke = async (pokeId) => {
    const {
      pokemon
    } = await chain.Query({
      pokemon: [{
        id: pokeId
      }, {
        id: true,
        number: true,
        name: true,
        image: true,
        types: true,
        classification: true,
        resistant: true,
        weaknesses: true,
        maxCP: true,
        maxHP: true,
        weight: {
          minimum: true,
          maximum: true
        },
        evolutions: {
          name: true,
          image: true,
        },
        attacks: {
          fast: {
            name: true,
            type: true,
            damage: true
          },
          special: {
            name: true,
            type: true,
            damage: true
          }
        }
      }]
    })
    console.log(pokemon)
    return pokemon
  }
  
  export default {
    getAll: getAll,
    getPoke: getPoke
  }