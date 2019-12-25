<script>
import { getContext } from 'svelte';
import GeneralTicket from './GeneralTicket.svelte';
import NewAccount from './NewAccount.svelte';
import RequestTable from './RequestTable.svelte';

const { open } = getContext('simple-modal');

const showGeneral = () => {
    open(GeneralTicket, { });
}

const showAccount = () => {
    open(NewAccount, { });
}
</script>

<main>
    <button on:click={showGeneral}>General</button>
    <button on:click={showAccount}>New Account</button>

    <RequestTable></RequestTable>
</main>