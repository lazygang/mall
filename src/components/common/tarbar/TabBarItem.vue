<template>
    <div class="tbi" @click="dian">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active: !isActive}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    props:{
        path: String
    },
    data(){
        return{
            // isActive:0,
            // path:"/cart"

        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)
        }
    },
    methods: {
        dian(){
            this.$router.replace(this.path).catch(err=>err);
            
        }
    }
}
</script>

<style scoped>
.tbi{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tbi img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
    color: rgb(5, 166, 230);
}
</style>


