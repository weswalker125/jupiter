<script>
  import Rate from "svelte-rate-it/Rate.svelte";
  export let ticket;

  const close = () => {
    console.log("Closing!");
  };
</script>

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

  body {
    font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
    background: #bf573f;
    color: #fff;
    padding: 50px 0;
  }

  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .container * {
    box-sizing: border-box;
  }

  .flex-outer,
  .flex-inner {
    list-style-type: none;
    padding: 0;
  }

  .flex-outer {
    max-width: 800px;
    margin: 0 auto;
  }

  .flex-outer li,
  .flex-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .flex-inner {
    padding: 0 8px;
    justify-content: space-between;
  }

  .flex-outer > li:not(:last-child) {
    margin-bottom: 20px;
  }

  .flex-outer li label,
  .flex-outer li p {
    padding: 8px;
    font-weight: 300;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .flex-outer > li > label,
  .flex-outer li p {
    flex: 1 0 120px;
    max-width: 220px;
  }

  .flex-outer > li > label + *,
  .flex-inner {
    flex: 1 0 220px;
  }

  .flex-outer li p {
    margin: 0;
  }

  .flex-outer li input:not([type="checkbox"]),
  .flex-outer li textarea {
    padding: 15px;
    border: none;
  }

  .flex-outer li button {
    margin-left: auto;
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    border-radius: 2px;
  }

  .flex-inner li {
    width: 100px;
  }

  .feedback {
      margin-top: 5em;
      display: grid;
  }
</style>

<body>
    <div class="container">
    <h3>{ticket.type}</h3>

    <form>
        <ul class="flex-outer">
        {#each Object.keys(ticket) as field}
            <li>
            <label>{field}:</label>
            <span>{ticket[field]}</span>
            </li>
        {/each}
        </ul>

        <div class="feedback">
            <p>Feedback</p>
            <Rate length={5} />
        </div>
        <button type="submit" on:click={close}>Close</button>
    </form>
    </div>
</body>