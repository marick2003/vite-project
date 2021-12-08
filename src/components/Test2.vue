<template>
    <div class="main">
            <select >
                <option v-for="(item,index) in clientType" :key="item" :value="index">{{item}}</option>
            </select>
            <button @click="currentTab = 'first-form'">First form</button>
            <button @click="currentTab = 'second-form'">Second form</button>
            <keep-alive>
                <component :is="currentTab"></component>
            </keep-alive>
    </div>
    
</template>
<script>
import AsyncComponent from './MyComponent.vue'
import FirstForm from './FirstForm.vue'
import SecondForm from "./SecondForm.vue"
    export default {
        components: {
            AsyncComponent,
            FirstForm,
            SecondForm
        },
        data() {
            return {
               currentTab: "first-form",
               numbers:{
                one: 1,
                www: 123

                },
                clientType:{
                    '1': 'Windows', '2': 'iOS', '3': 'Android', '4': 'Android TV', '5': 'Mac OS', '6': 'Apple TV'
                },
                notifications: [
                    {
                        id: 1,
                        message: 'Lorem ipsum dolor sit amet',
                        timeago: ' à 3 horas atás',
                        title: 'Lorem',
                        hastags:[
                        '#Advogado',
                        '#ReformulaçãoPositiva'
                        ]
                    },
                    {
                        id: 2,
                        message: 'Curabitur pretium tincidunt lacus.',
                        timeago: ' à 1 semana atás',
                        title: 'Curabitur',
                        hastags:[
                        '#ReformulaçãoPositiva',
                        '#RetTesdt'
                        ]

                    }
                ]
            }
        },
        setup(props) {
            
        },
        mounted() {
            const objectArray =Object.entries(this.clientType);
            objectArray.forEach(([key, value]) => {
                console.log(key); 
                console.log(value); 
                });
            Object.values(this.clientType);
            console.log(this.clientType);
            console.log(this.notifications.filter(obj=> obj.id==1));
        },

    }
</script>
<style lang="scss" scoped>

</style>