<script>
  import { onMount } from "svelte";
  import Button, { Label } from "@smui/button";
  import { isShowLogin } from "../stores/index.js";
  import Popup from "./common/popup.svelte";
  import Header from "./common/header.svelte";
  const openLogin = () => {
    $isShowLogin = true;
  };

  let isShow = false;
  const getIsShow = event => {
    isShow = event.detail.isShow;
  };
  let options = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "pink" },
    { id: 4, name: "pink" },
    { id: 5, name: "pink" },
    { id: 6, name: "pink" },
    { id: 7, name: "pink" },
    { id: 8, name: "pink" },
    { id: 9, name: "pink" },
    { id: 10, name: "pink" },
    { id: 11, name: "pink" }
  ];
  let selectId=null;
  const confirm = event => {
    selectId=event.detail.id;
    isShow = event.detail.isShow;
  };
</script>

<style>
  section {
    padding: 0.5rem;
  }
</style>

<main>
  <header>
    <Header title={'Mine'} />
  </header>
  <section>
    <Button
      color="secondary"
      variant="raised"
      on:click={openLogin}
      class="button is-primary">
      Login
    </Button>
    <Button color="secondary" variant="raised" on:click={() => (isShow = true)}>
      select
    </Button>
    {selectId}
    <Popup {isShow} on:getIsShow={getIsShow} {options} confirm={'confirm'} on:confirm={confirm} />
  </section>
</main>
