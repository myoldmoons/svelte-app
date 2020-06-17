<script>
    export let title='Svelte Title';
</script>
    <div class="head">
        <div>{title}</div>
    </div>
<style>
.head{
    height: 60px;
    width: 100%;
}
.head div{
    position: fixed;
    width:100%;
    height: 50px;
    background-color: #fff;
    left: 0;
    top: 0;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.2rem;
}
</style>