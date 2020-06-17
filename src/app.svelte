<script>
  import Router from "svelte-spa-router";
  import routes from "./router/index.js";
  import { link } from "svelte-spa-router";
  import { isShowLogin,isShowLoading } from "./stores/index.js";
  import Login from "./component/login.svelte";
  import Loading from "./component/common/loading.svelte";
  const menuList = [
    {
      router: "/home",
      name: "home",
      icon: "http://pic.90sjimg.com/design/00/67/59/63/5934fde57834f.png"
    },
    {
      router: "/mine",
      name: "mine",
      icon: "http://pic.90sjimg.com/design/00/67/59/63/5934fde57834f.png"
    },
    {
      router: "/list",
      name: "list",
      icon: "http://pic.90sjimg.com/design/00/67/59/63/5934fde57834f.png"
    },
    {
      router: "/mine",
      name: "svelte",
      icon: "http://pic.90sjimg.com/design/00/67/59/63/5934fde57834f.png"
    }
  ];
</script>

<style>
  footer ul {
    background-color: #fff;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e6e6e6;
  }
  footer ul li {
    flex: 1;
    text-align: center;
  }
  footer ul li img {
    width: 1.2rem;
    display: block;
    margin: 0 auto;
  }
  footer ul li a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .loading{
    position: fixed;
    width: 60px;
    height: 60px;
    background-color: rgba(0,0,0,0);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
  }
</style>

<main>
  <Router {routes} />
  <footer>
    <ul>
      {#each menuList as { router, name, icon }}
        <li>
          <a use:link={router} href="javscript:;">
            <img src={icon} alt={name} />
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </footer>
  <!-- dialog -->
  {#if $isShowLogin}
    <Login />
  {/if}
  {#if $isShowLoading}
  <div class="loading">
    <Loading />
  </div>
  {/if}
</main>
