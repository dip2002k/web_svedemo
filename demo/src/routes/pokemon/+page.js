
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

export async function load({ fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const poke = await res.json();
    return { poke };
  }