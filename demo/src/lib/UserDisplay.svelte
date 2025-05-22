<script>
    let { user } = $props();
</script>

<div>
    <img src={user.img} alt="">
    <p>{user.userName}</p>
</div>