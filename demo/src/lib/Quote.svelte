<script>
  let { quote } = $props();
</script>

<div>
  <blockquote cite={quote.citeUrl}>
    <p>
      {quote.quoteText}
    </p>
  </blockquote>
  <p>—{quote.author}, <cite>{quote.publication}</cite></p>
</div>

<style>
  div {
    border: 1px dashed silver;
    border-radius: 10px;
    background-color: peachpuff;
    margin: 1em;
    padding: 1em;
  }
  blockquote {
    border-left: 0.5em solid tomato;
    padding-left: 0.5em;
  }
  blockquote + p {
    margin-left: 3em;
    color: tomato;
  }
</style>