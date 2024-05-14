<template>
   <!-- slots are used to pass multiple data from one component to other -->
  <!-- <h2>{{ data }}</h2> -->
  <div id="priceCard">
    <h1>Slots</h1>  
        <header>
            <slot name="header"></slot>
        </header>
        <section>
            <slot name="section"></slot>
        </section>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    <br>

  <!-- <slot>

  </slot> -->

</template>
<script>
    export default{
        name:"ChildSlot",
        props:{
            data: String,
        }
    } 

</script>
<style>
    #priceCard{
        width: 400px;
        padding: 22px;
        text-align: center;
        border: 1px solid green;
        align-content: center;
    }
</style>