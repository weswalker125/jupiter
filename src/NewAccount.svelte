<script>
    import { form } from 'svelte-forms';
    import axios from 'axios';
    import Datepicker  from 'svelte-calendar';

    // Fields
    let name = '';
    let arrivalDate = '';
    let accountType = '';
    let comments = '';


    const accountForm = form(() => ({
        name: { value: name, validators: ['required', 'min:6']},
        arrivalDate: { value: arrivalDate, validators: ['required', 'date']},
        accountType: { value: accountType, validators: ['required']},
        comments: { value: comments },
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
                    ArrivalDate: arrivalDate,
                    AccountType: accountType,
                    Comments: comments
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
	<h3>New Account</h3>
	
    <form>
        <ul class="wrapper">
            <li class="form-row">
                <label>Name:</label>
                <input type="text" bind:value={name} bindClass={{ form: accountForm }}/>
            </li>
            <li class="form-row">
                <label>Arrival Date:</label>
                <!-- <input type="arrivalDate" bind:value={arrivalDate} bindClass={{ form: accountForm }}/> -->
                <Datepicker></Datepicker>
            </li>
            <li class="form-row">
                <label>Type:</label>
                <select bind:value={accountType} bindClass={{ form: accountForm }}>
                    <option>Standard</option>
                    <option>Admin</option>
                    <option>Virtual</option>
                </select>
            </li>
            <li class="form-row">
                <label>Comments:</label>
                <textarea></textarea>
            </li>
        </ul>

        {#if $accountForm.name.errors.includes('required')}
            <p>The name is required</p>
        {/if}

        {#if $accountForm.name.errors.includes('min')}
            <p>the name should be at least 6 characters</p>
        {/if}
        <button type="submit" disabled={!$accountForm.valid} on:click={createListItem}>Submit</button>
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