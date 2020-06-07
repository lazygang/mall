<template>
  <div class="tc">
      <div v-for="(i,index) in titles" class="tci" :class="{active: index === currentindex}" @click="dian(index)" :key="index">
          <span>{{i}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentindex: 0
        }
    },
    methods:{
        dian(index){
            this.currentindex=index
            this.$emit('ctc',index)
        }
    }
}
</script>

<style scoped>
.tc{
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
}
.tci{
    flex: 1;
    height: 40px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
.tci span{
    padding: 5px;
}
</style>