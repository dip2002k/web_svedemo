<script>
  import Quote from "$lib/Quote.svelte";

  let quotes = [
    {
      quoteText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, totam qui nulla accusantium incidunt odit quo nihil voluptatem voluptatum officiis, eum fugiat consectetur? Inventore, sed dicta sunt placeat dolore molestiae!",
      author: "Cicero",
      publication: "Lorem Ipsum",
      citeUrl: "https://www.huxley.net/bnw/four.html",
    },
    {
      quoteText:
        "Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.",
      author: "Aldous Huxley",
      publication: "Brave New World",
      citeUrl: "https://www.huxley.net/bnw/four.html",
    },
    {
      quoteText: "I'm Batman",
      author: "Batman",
      publication: "Dark Knight",
      citeUrl: "https://www.huxley.net/bnw/four.html",
    },
    {
      quoteText:
        "It is hard to fail but it is worse never to have tried to succeed.",
      author: "Theodore Roosevelt",
      publication: "",
      citeUrl:
        "https://www.shutterfly.com/ideas/best-quotes-of-all-time/?msockid=3c99785b330c66ae0c8f6db0323e67db",
    },
  ];
</script>

<h2>About us</h2>

{#each quotes as quote}
  <Quote {quote} />
{/each}

<style>
</style>
