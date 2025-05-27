<script>
    // The data prop brings anything you fetched in the load function in here for use on the page
    let { data } = $props();
    const employeeList = data.employees.data;
    console.log(employeeList); // You can see the data in the console using the browser's dev tools
</script>

{#each employeeList as person}
    <div class="person">
        <h2>{person.first_name + " " + person.last_name}</h2>
        <img src={person.avatar} alt={person.first_name + " " + person.last_name}>
        <p>{person.email}</p>
    </div>
{/each}

<style>
    .person {
        border: 1px solid grey;
        border-radius: 4px;
        max-width: 300px;
        padding: 1em;
        margin: 1em;
    }
    h2 {
        margin-top: 0;
    }
</style>