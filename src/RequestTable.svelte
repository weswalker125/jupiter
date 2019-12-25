<script>
    import SvelteTable from 'svelte-table';
    import { createEventDispatcher } from 'svelte';

    export const rows = [
        { id: 2, createdAt: new Date(2019, 11, 3), type: "General", status: "Complete" },
        { id: 10, createdAt: new Date(2019, 11, 5), type: "Account", status: "Pending Approval" },
        { id: 14, createdAt: new Date(2019, 11, 10), type: "General", status: "Complete" },
        { id: 22, createdAt: new Date(2019, 10, 28), type: "Account", status: "Rejected" },
        { id: 24, createdAt: new Date(2019, 11, 24), type: "General", status: "In Progress" },
    ];
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
            value: v => v.createdAt.toLocaleDateString(),
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
        console.log("clicked");
    }
</script>

<main>
    <div class="request-table">
        <SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>
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