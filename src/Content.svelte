<script>
import { getContext } from 'svelte';
import GeneralTicket from './tickets/GeneralTicket.svelte';
import NewAccount from './tickets/NewAccount.svelte';
import RequestTable from './RequestTable.svelte';
import ViewTicket from './tickets/ViewTicket.svelte';
import axios from 'axios';


const { open } = getContext('simple-modal');

const showGeneral = () => {
    open(GeneralTicket, { });
}

const showAccount = () => {
    open(NewAccount, { });
}

const showTicket = (clickedRow) => {
    // Get full details on clickedRow
    let id = clickedRow.detail.ticketId;
    console.log(`Fetching data for id=${id}`);
    let url = `http://localhost:3000/tickets/${id}`;
    axios.get(url)
        .then((response) => {
            let fullTicket = response.data;
            open(ViewTicket, { ticket: fullTicket });
        })
        .catch((err) => {
            console.log(err);
        });
}
</script>

<main>
    <button on:click={showGeneral}>General</button>
    <button on:click={showAccount}>New Account</button>

    <RequestTable on:showTicket={e => showTicket(e)}></RequestTable>
</main>