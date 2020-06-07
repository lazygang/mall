<template>
  <div id="home">
    <nav-bar class="hb"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tc2" :titles="['流行','新款','精选']" @ctc="ctc" v-show="tbcshow" ref="tc2" />
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="scroll" @pullup="pullup" >
      <ban-ner :banner="banner" @fudong="fudong"/>
      <tui-jian :recommend="recommend"/>
      <liu-xing/>
      <tab-control class="tc1" :titles="['流行','新款','精选']" @ctc="ctc" ref="tc1"/>
      <good-list :list="showgood" class="g-l"/>
    </scroll>
    <back-top @click.native="backtop" v-show="scrollshow" />
  </div>
</template>

<script>
import {getHomeMultiData,getGoodsData} from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import BanNer from './child/BanNer'
import TabControl from 'components/content/tabcontrol/TabControl'
import Scroll from 'components/common/scroll/Scroll'

import TuiJian from './child/TuiJian'
import LiuXing from './child/LiuXing'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backtop/BackTop'

import {debonunce} from 'common/utils.js'
import {tongyong} from 'common/mixin.js'

export default {
  name:'Home',
  mixins:[tongyong],
  data(){
    return{
      banner:[],
      recommend:[],
      good:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      type:'pop',   
      // scrollshow:false,
      // position:0,
      tbcshow:false,
      tbcy:0,
      //
      savey:0,
      shuaxin:null
    }
  },
  components:{
   NavBar,
   BanNer,
   TabControl,
   Scroll,
   TuiJian,
   LiuXing,
   GoodList,
   BackTop
  },
  computed:{
    showgood(){
      return this.good[this.type].list
    },
  },
  created(){
    this.ghm()
    this.ggd('pop')
    this.ggd('new')
    this.ggd('sell')
  },
  mounted(){
      const fangdou = debonunce(this.$refs.scroll.refresh,300)
      this.shuaxin = ()=>{
      fangdou()
    }
      this.$bus.$on('shuaxin',this.shuaxin)
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.savey,0)
    this.$refs.scroll.refresh()   
  },
  deactivated(){
    this.savey= this.$refs.scroll.getscrolly()
    this.$bus.$off('shuaxin',this.shuaxin) 
  },
  methods:{
    ghm(){
       getHomeMultiData().then(res =>{
        this.banner=res.data.banner.list;
        this.recommend= res.data.recommend.list
      })
    },
    ggd(type){
      const page = this.good[type].page + 1
      getGoodsData(type,page).then(res =>{
        this.good[type].list.push(...res.data.list)
        this.good[type].page = page 
        // this.$refs.scroll.scroll.refresh()
      })
    },
    ctc(data){
    switch(data){
      case 0:
        this.type='pop'
        break
      case 1:
        this.type='new'
        break
      case 2:
        this.type='sell'
        break
      }
      this.$refs.tc1.currentindex=data
      this.$refs.tc2.currentindex=data

    },




    // backtop(){
    //   this.$refs.scroll.scrollto(0,0)
    //   },
    // scroll(data){
    //   this.scrollshow = (-data.y) > 1000
    //   this.position = -data.y
    //   this.tbcshow = this.position > this.tbcy
    //   // console.log(this.position);
    // },






    pullup(){
      this.ggd(this.type)
      this.$refs.scroll.finishpullup()
    },
    fudong(){
      this.tbcy = this.$refs.tc1.$el.offsetTop -44
      // this.tbcshow = this.position > this.tbcy
      // console.log(this.position);  
    },
    scroll(data){
            this.scrollshow = (-data.y) > 1000    
            this.position = -data.y
            this.tbcshow = this.position > this.tbcy    
        },
  } 
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
}
.hb{
  background-color: var(--color-tint);
  color: white;
/* 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tc2{
  position: fixed;
  left: 0;
  right: 0;
  top: 44;
  z-index: 9;
}
.scroll{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
