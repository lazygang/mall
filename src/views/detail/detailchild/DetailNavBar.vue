<template>
  <div>
      <nav-bar>
          <div slot="left" class="left" @click="back">
              <img src="~assets/img/detail/back.svg" alt="">
          </div>
          <div  class="dnb" slot="center">
              <div v-for="(i,index) in list" :key="index"  class="dnbi" @click="dian(index)" :class="{active: index === currentindex}">{{i}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    // props:{
    //     navbarpage:{
    //         type:Number,
    //         default(){
    //             return 0
    //         }
    //     }
    // },
    data(){
        return{
            list:['商品','参数','评论','推荐'],
            currentindex: 0
        }
    },
    components:{
        NavBar
    },
    methods:{
        back(){
            this.$router.back()
        },
        dian(index){
            this.currentindex = index
            this.$emit('tiaozhuan',index)
        },
    }
}
</script>

<style scoped>
.dnb{
    display: flex;
}
.dnbi{
    flex: 1;
}
.left img{
   margin-top: 8px;
    height: 25px;
}
.active{
    color: red;
}
</style>