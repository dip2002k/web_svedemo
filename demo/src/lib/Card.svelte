<script>
  import CardInfo from '$lib/CardInfo.svelte';
  import UserDisplay from './UserDisplay.svelte';

    let { cardData } = $props();
    let user = cardData.user;
    let info = cardData.info;
</script>

<div>
    <h2>{cardData.title}</h2>
    <section>
        <UserDisplay {user} />
        <CardInfo {info} />
    </section>
</div>

<style>
    div {
        border: 1px solid #333;
        border-radius: 5px;
        max-width: 300px;
        background-color: #f1f1f1;
        box-shadow: 5px 5px #333;
        margin: 0 1em 1em 0;
        padding: 0.8em;
    }
    section {
        display: flex;
    }
</style>