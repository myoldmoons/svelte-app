<script>
  import { isShowLogin } from "../stores/index.js";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Header from "./common/header.svelte";
  let name = "";
  let email = "";
  const openLogin = () => {
    $isShowLogin = true;
  };
  let dialog;
  function deleteItem() {
    console.log("del");
  }
  function closeHandler() {
    console.log("closeHandler");
  }
</script>

<style>
  div {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px dashed #d5d5d5;
  }
  section {
    padding: 0 0.5rem;
  }
</style>

<main>
  <header>
    <Header title={'Home'} />
  </header>
  <section>
    <div>
      <Button color="secondary" variant="raised" on:click={openLogin}>
        <Label>Login</Label>
      </Button>
      <Button color="primary" variant="raised" on:click={openLogin}>
        <Label>Login</Label>
      </Button>
    </div>
    <div>
      <Textfield bind:value={name} label="Name" />
      <br />
      <Textfield type="password" bind:value={email} label="Password" />
    </div>
    <br />
    <br />
    <Button variant="raised" on:click={() => dialog.open()}>
      <Label>Delete</Label>
    </Button>
    <Dialog
      bind:this={dialog}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-content"
      on:MDCDialog:closed={closeHandler}>
      <Title id="dialog-title">Delete Item</Title>
      <Content id="dialog-content">
        Are you sure you want to delete the item?
      </Content>
      <Actions>
        <Button on:click={deleteItem}>
          <Label>Ok</Label>
        </Button>
      </Actions>
    </Dialog>
  </section>
</main>
