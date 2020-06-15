<script>
  import ajax from "../utils/http.js";
  import Header from "./common/header.svelte";
  import { onMount } from "svelte";
  import Loading from "./common/loading.svelte";
  let list = [];
  let getTitle = null;
  let total=[1,2];
  onMount(() => {
    ajax.get("/photos?_limit=10").then(res => {
      console.log(res);
      list = res;
    });
    setTimeout(() => {
      getTitle = "局部loading。。。";
    }, 1500);
  });
</script>

<style>
  section {
    padding: 0 0.5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  ul li {
    width: 32%;
    margin-bottom: 6px;
  }
  ul li img {
    width: 100%;
  }
  .title {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>

<main>
  <header>
    <Header title={'List'} />
  </header>

  <section>
    {#each total as i}
      <div class="title">
        {#if getTitle}
          {getTitle}
        {:else}
          <Loading />
        {/if}
      </div>
    {/each}
    <ul>
      {#each list as item}
        <li>
          <img src={item.url} alt="" />
        </li>
      {/each}
    </ul>
  </section>

</main>
