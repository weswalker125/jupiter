<script>
import { getContext } from 'svelte';
import GeneralTicket from './GeneralTicket.svelte';
import NewAccount from './NewAccount.svelte';
import RequestTable from './RequestTable.svelte';
import ViewTicket from './ViewTicket.svelte';

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
    let fullTicket = { id: id, blah: "blahblah", filler: "bullshit", something: "else" };
    open(ViewTicket, { ticket: fullTicket });
}
</script>

<main>
    <button on:click={showGeneral}>General</button>
    <button on:click={showAccount}>New Account</button>

    <RequestTable on:showTicket={e => showTicket(e)}></RequestTable>
</main>