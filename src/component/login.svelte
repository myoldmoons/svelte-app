<script>
  import { fly } from "svelte/transition";
  import { isShowLogin ,screenWidth} from "../stores/index.js";
  import Button from '@smui/button';
  const back = () => {
    $isShowLogin = false;
  };
</script>

<style>
  section {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: antiquewhite;
    z-index: 9999;
  }
</style>

<main>
  <section
    in:fly={{ x: $screenWidth, duration: 500, opacity: 1 }}
    out:fly={{ x: $screenWidth, duration: 500, opacity: 1 }}>
    <Button color="secondary" variant="raised" on:click={back}>back</Button>
    <div>this is login</div>
  </section>
</main>
