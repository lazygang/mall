<template>
  <div class="tuijian">
      <div v-for="(i,index) in recommend" class="tj" :key="index">
          <a :href="i.link">
              <img :src="i.image" alt="">
              <div>{{i.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
     props:{
        recommend:{
            type:Array,
            default(){
                return[]
            }
        }
    },
}
</script>

<style scoped>
.tuijian{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}

.tj{
    flex: 1;
}

.tj img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>
