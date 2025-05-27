export async function load({ fetch }) {
    const url = "https://reqres.in/api/users?page=2";
    
    try {
        // fetch takes a second argument containing options object
        const response = await fetch(url, {
            // Options object just needs headers object for this API
            headers: {
                "x-api-key": "reqres-free-v1",  
              }
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        // Pass the employees array back to the page
        const employees = await response.json();
        return { employees };
    } catch (error) {
        console.error(error.message);
    }
  }