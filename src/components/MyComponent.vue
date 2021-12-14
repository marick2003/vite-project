<template>
    <div>
       My component 
    
    </div>
</template>
<script>
export default {
    component:{
        todoItem:`li>
            {{ title }}
            <button v-on:click="$emit('remove')">Remove</button>
          </li>`
    },
    data() {
        return {
            todoList: [
                {
                id: 1,
                title: 'Do the dishes'
                },
                {
                id: 2,
                title: 'Take out the trash'
                },
                {
                id: 3,
                title: 'Mow the lawn'
                }
            ],
        }
    },
    mounted() {
        console.log("load mycomponent")
    },
}
</script>
<style lang="">
    
</style>