<template>
  <div>
    <swiper>
      <swiper-item v-for="(i,index) in banner" :key="index">
        <a :href="i.link">
          <img :src="i.image" alt="" @load="fudong">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
      fudong(){
        this.$emit('fudong')
      }
    }
}
</script>

<style>

</style>