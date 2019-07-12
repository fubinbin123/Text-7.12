<template>
  <div class="home">
       <header class="header">
           <span>&lt;</span><span>多家网</span>
       </header>
       <main class="main">
         <div class="conte">
            <div class="conte-item" v-for="item in dataList" :key="item.id" >
                {{item.name}}
            </div>
         </div>
       </main>
       <footer class="footer">
            <router-link to="/home">首页</router-link>
            <router-link to="/mine">我的</router-link>
       </footer>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return {
            dataList:[{
              name:"列表1",
              id:1
            },{
              name:"列表2",
              id:2
            },{
              name:"列表3",
              id:3
            }]
    }
  },
  components: {
    
  }
}
</script>
<style >
 
</style>
