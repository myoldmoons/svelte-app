<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let isShow = false;
  export let options = [];
  export let confirm='';
  const setIsShow = () => {
    dispatch("getIsShow", {
      isShow: false
    });
  };
  const hanlderClickItem=(item)=>{
    console.log(item)
    dispatch(confirm,{
      id:item.id,
      isShow:false
    })
  }
</script>

<style>
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 300px;
    left: 0;
    bottom: 0;
    z-index: 9999;
    overflow-y: auto;
    background-color: #fff;
  }
  .content ul {
    padding: 10px;
    text-align: center;
  }
  .content ul li {
    height: 36px;
    line-height: 36px;
  }
</style>

<main>
  {#if isShow}
    <div>
      <div class="mask" in:fade out:fade on:click={setIsShow} />
      <div
        class="content"
        in:fly={{ y: 400, duration: 500, opacity: 1 }}
        out:fly={{ y: 400, duration: 500, opacity: 1 }}>
        <ul>
          {#each options as item}
            <li on:click={hanlderClickItem(item)}>{item.name}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</main>
