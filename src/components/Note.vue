<template>
    <div class="wrap">
        
    </div>
</template>
<script>
const photoData=[
    {

    }
]
export default {
    
}
</script>
<style lang="scss" scope>

*, *::before, *::after{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body, input{
  font-family: 'Homemade Apple', cursive;
}
.wrap{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.container{
  width: 86.7%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
h1, .inputArea p{
  font-family: 'Caesar Dressing', cursive;
}
h1{
  color: #fff;
  font-size: 72px;
  margin: 40px 0;
}
.photoList{
  width: 540px;
  height: 403px;
  transform-style: preserve-3d;
  margin-bottom: 40px;
  perspective:800px;
  position: relative;
}
.photo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 4px 40px #FFFFFF80;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.8s ease 0s;
}
.turn{
  width: 540px;
  background-color: #fff;
  padding: 10px;
  box-shadow: none;
}
.photo-img{
  width: 520px;
  height: 316px;
  background-image: url(https://images.unsplash.com/photo-1518859003798-1d5d342165a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=997&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.photo-mood{
  font-size: 24px;
  padding: 8px 0;
  text-align: center;
  margin-top: 10px;
}
.left-btn, .right-btn{
  width: 48px;
  height: 48px;
  color: #fff;
  text-align: center;
  font-size: 48px;
  display: block;
  position: absolute;
  top: calc(50% - 24px);
}
.left-btn{
  left: -50px;
}
.right-btn{
  right: -50px;
}

.inputArea{
  width: 65.76%;
  background-color: #fff;
  padding: 26px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.inputArea p{
  margin-bottom: 15px;
}
.input-mood{
  width: 100%;
  font-size: 20px;
  text-align: center;
  border-width: 0 0 1px 0;
  padding: 8px 0;
  outline: none;
}
.died p{
  color: red;
  text-decoration: line-through;
  transition: color 1s ease 0s;
}
canvas{
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes fadeOut {
  from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
}
 
</style>