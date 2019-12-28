<script>
    import SvelteTable from 'svelte-table';
    import { createEventDispatcher } from 'svelte';
    import axios from 'axios';

    export let rows = [];
    const columns = [
        {
            key: "id",
            title: "ID",
            value: v => v.id,
            sortable: true,
            headerClass: "text-left"
        },
        {
            key: "createdAt",
            title: "Created",
            value: v => {
                let d = new Date(v.createdAt);
                return d.toLocaleDateString();
            },
            sortable: true
        },
        {
            key: "type",
            title: "Type",
            value: v => v.type,
            sortable: true
        },
        {
            key: "status",
            title: "Status",
            value: v => v.status,
            sortable: true,
            headerClass: "request-table-header"
        },
    ];

    const dispatch = createEventDispatcher();
    export function clickRow(row) {
        console.log(row);
        dispatch('showTicket', { ticketId: row.id });
    }

    function getData() {
        let url = "http://localhost:3000/tickets";
        axios.get(url)
            .then((response) => {
                rows = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getData();
</script>

<main>
    <div class="request-table">
        <SvelteTable columns="{columns}" rows="{rows}" on:clickRow={e => clickRow(e.detail.row)}></SvelteTable>
    </div>
</main>

<style>
    .request-table {
        border: .25em solid black;
    }
    .request-table-header {
        background-color: #13f44e3a;
    }
</style>