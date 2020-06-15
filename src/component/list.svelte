<script>
  import ajax from "../utils/http.js";
  import Header from "./common/header.svelte";
  import { onMount } from "svelte";
  let list = [];
  onMount(() => {
    ajax.get("/photos?_limit=10").then(res => {
      console.log(res);
      list = res;
    });
  });
</script>

<style>
  section {
    padding: 0 0.5rem;
  }
  ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  ul li{
      width:32%;
      margin-bottom: 6px;
  }
  ul li img{
      width: 100%;
  }
</style>

<main>
  <header>
    <Header title={'List'} />
  </header>

  <section>
    <ul>
      {#each list as item}
        <li>
          <img src={item.url} alt="" />
        </li>
      {/each}
    </ul>
  </section>

</main>
