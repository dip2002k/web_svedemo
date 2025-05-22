<script>
    import Card from "$lib/Card.svelte";
  
    // This page will display a bunch of pokemon cards
    let { data } = $props();
    const pokemon = data.poke.results; // Grab the internal object for ease of typing
    console.log(pokemon); // Just checking
  
    // const pokeData = {
    //     title: pokemon.name,
    //     user: {
    //       userName: pokemon.name,
    //       img: pokemon.sprites.front_default,
    //     },
    //     info: "information here",
    //   }
  </script>
  
  <!-- <Card cardData={pokeData}/> -->
  <ul>
    {#each pokemon as mon}
      <li><a href={mon.url}>{mon.name}</a></li>
    {/each}
  </ul>
  
  
  <style>
  </style>