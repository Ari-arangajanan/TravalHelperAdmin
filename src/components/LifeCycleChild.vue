<template>

<h1 ref="removing">LC Child</h1>
</template>
<script>
export default{
    name: "L_C_Child",
    mounted() {
    console.log("mounted", this.$refs["removing"]); // Now this will correctly log the reference
  },
    unmounted() {
    console.log("unmounted", this.$refs["removing"]); // This will also correctly log the reference
  }
    
}
</script>