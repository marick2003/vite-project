<template>
  <div class="main">
    <select>
      <option v-for="(item, index) in clientType" :key="item" :value="index">
        {{ item }}
      </option>
    </select>
    <button @click="currentTab = 'first-form'">First form</button>
    <button @click="currentTab = 'second-form'">Second form</button>
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
    <button @click="doPrint">打印測試</button>
    <button @click="">async TEST</button>
  </div>
</template>
<script>
import AsyncComponent from "./MyComponent.vue";
import FirstForm from "./FirstForm.vue";
import SecondForm from "./SecondForm.vue";
import sha1 from "sha1";
const asyncPage = {
  component: AsyncComponent,
  delay: 200,
  timeout: 3000,
};
export default {
  components: {
    AsyncComponent,
    FirstForm,
    SecondForm,
  },
  data() {
    return {
      currentTab: "first-form",
      numbers: {
        one: 1,
        www: 123,
      },
      clientType: {
        1: "Windows",
        2: "iOS",
        3: "Android",
        4: "Android TV",
        5: "Mac OS",
        6: "Apple TV",
      },
      notifications: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet",
          timeago: " à 3 horas atás",
          title: "Lorem",
          hastags: ["#Advogado", "#ReformulaçãoPositiva"],
        },
        {
          id: 2,
          message: "Curabitur pretium tincidunt lacus.",
          timeago: " à 1 semana atás",
          title: "Curabitur",
          hastags: ["#ReformulaçãoPositiva", "#RetTesdt"],
        },
      ],
    };
  },
  setup(props) {},
  mounted() {
    const objectArray = Object.entries(this.clientType);
    objectArray.forEach(([key, value]) => {
      console.log(key);
      console.log(value);
    });
    Object.values(this.clientType);
    console.log(this.clientType);
    console.log(this.notifications.filter((obj) => obj.id == 1));
  },
  methods: {
    doPrint() {
      const cors = "http://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      const url = "http://api.feieyun.cn/Api/Open/"; // origin api url
      let timestamp = Data.parse(new Date());
      let USER = "rockylhc@hotmail.com";
      let UKEY = "";
      /** fetch api url by cors-anywhere */
      this.axios
        .post(`${cors}${url}`, {
          user: USER,
          stime: timestamp,
          sig: sha1(USER + timestamp),
          apiname: "Open_printLabelMsg",
          sn: "922564230",
          content: "test",
        })
        .then(
          (response) => {
            const msg = response.data;
            document.body.innerHTML = JSON.stringify(msg);
          },
          (error) => {}
        );

      /*this.axios.get('https://api.open.feyin.net/token?code=922564230&secret=varxkhun&appid=5a58867e0aca3027f742a4de').then((response) => {
                    console.log(response.data)
                })*/

      /* this.axios({
                    method: 'post',
                    url: 'https://admin.feieyun.com/api.php',
                    //API要求的資料
                    data: {
                        action: 'alysa@gmail.com',
                        uid: '11223344',
                        sn: '922564230',
                        times: 1,
                        content: 'test',
                        title: '123'
                    }
                }).then( (response) => console.log(response))
                */
    },
  },
};
</script>
<style lang="scss" scoped></style>
