<template>
  <div>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    <button class="bg-sky-600 hover:bg-sky-700">Save changes</button>
    <div class="flex flex-col-reverse">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  </div>
</template>
<script>
let obj = await import('../script/say.js');
console.log(obj.hi());
export default{

  data() {
    return {
      
    }
  },
  mounted() {
    

  },
  created() {
    
  },

}
</script>
<style scoped></style>
