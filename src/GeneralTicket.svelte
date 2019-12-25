<script>
    import { form } from 'svelte-forms';
    import axios from 'axios';

    // Fields
    let name = '';
    let email = '';
    let description = '';
    let location = '';


    const genTicket = form(() => ({
        name: { value: name, validators: ['required', 'min:6']},
        email: { value: email, validators: ['required', 'email']},
        location: { value: location, validators: ['required']},
        description: { value: description, validators: ['required', 'min:25']},
    }));

    // Submit function
    const createListItem = () => {
        let url = "/_api/web/lists/GetByTitle('Jupiter')/items";
        axios({
                method: 'post',
                url: url,
                headers: {
                    'accept': 'application/json;odata=verbose'
                },
                data: {
                    Name: name,
                    Email: email,
                    Description: description,
                    Location: location
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
</script>

<main>
	<h3>General Ticket</h3>
	
    <form>
        <ul class="wrapper">
            <li class="form-row">
                <label>Name:</label>
                <input type="text" bind:value={name} bindClass={{ form: genTicket }}/>
            </li>
            <li class="form-row">
                <label>Email:</label>
                <input type="email" bind:value={email} bindClass={{ form: genTicket }}/>
            </li>
            <li class="form-row">
                <label>Location:</label>
                <select bind:value={location} bindClass={{ form: genTicket }}>
                    <option>Yonder</option>
                    <option>Whoville</option>
                    <option>Oherthere</option>
                </select>
            </li>
            <li class="form-row">
                <label>Description:</label>
                <textarea></textarea>
            </li>
        </ul>

        {#if $genTicket.name.errors.includes('required')}
            <p>The name is required</p>
        {/if}

        {#if $genTicket.name.errors.includes('min')}
            <p>the name should be at least 6 characters</p>
        {/if}
        <button type="submit" disabled={!$genTicket.valid} on:click={createListItem}>Submit</button>
    </form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
    
    .wrapper {
        background-color: whitesmoke;
        list-style-type: none;
        padding: 1.5em;
        border-radius: 3px;
        max-width: 700px;
        margin: 0 auto;
    }
    .form-row {
        display: flex;
        justify-content: flex-end;
        padding: .5em;
    }
    .form-row > label {
        padding: .5em 1em .5em 0;
        flex: 1;
    }
    .form-row > input,
    .form-row > select,
    .form-row > textarea {
        flex: 2;
    }
    .form-row > input,
    .form-row > button {
        padding: .5em;
    }
    .form-row > button {
    background: gray;
    color: white;
    border: 0;
    }
</style>