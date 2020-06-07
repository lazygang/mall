<template>
    <div class="detail">
        <detail-nav-bar @tiaozhuan="tiaozhuan" ref="nav"/>
        <scroll :probeType="3" class="gundong" ref="scroll"  @scroll="scroll">
            <swiper class="topi">
                <swiper-item v-for="(i,index) in topimg" :key="index">
                    <img :src="i" alt="" >
                </swiper-item>
            </swiper>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detailInfo="detailInfo" @shuaxin="shuaxin"/>
            <detail-param-info :paramInfo="paramInfo" ref="param"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <good-list :list="list" ref="tuijian"/>
        </scroll>
        <back-top @click.native="backtop" v-show="scrollshow"/>
        <detail-bottom-bar/>
    </div>
</template>

<script>
import DetailNavBar from 'views/detail/detailchild/DetailNavBar'
import DetailBaseInfo from 'views/detail/detailchild/DetailBaseInfo'
import DetailShopInfo from 'views/detail/detailchild/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/detailchild/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/detailchild/DetailParamInfo'
import DetailCommentInfo from 'views/detail/detailchild/DetailCommentInfo'
import DetailBottomBar from 'views/detail/detailchild/DetailBottomBar'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backtop/BackTop'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
import Scroll from 'components/common/scroll/Scroll'

import {debonunce} from 'common/utils.js'
import {tongyong} from 'common/mixin.js'

export default {
    name:"Detail",
    mixins:[tongyong],
    data(){
        return{
            iid:null,
            itemdata:null,
            topimg:[],
            goods:{},
            shop:{},
            paramInfo: {},
            detailInfo:{},
            commentInfo:{},
            list:[],
            navbarpage:0,
            zhuti:[0,500,1000,1500],
        }
    },
    created(){
        this.iid=this.$route.params.iid
        this.gd(this.iid)
        this.gr()
        
    },
    mounted(){
        // this.topimg = this.itemdata.result.itemInfo.topImages
        this.$refs.nav.currentindex = this.navbarpage
    },
    components:{
         DetailNavBar,
         DetailBaseInfo,
         DetailShopInfo,
         DetailGoodsInfo,
         DetailParamInfo,
         DetailCommentInfo,
         DetailBottomBar,
         GoodList,
         BackTop,
         Swiper,
         SwiperItem,
         Scroll,
        
    },
    methods:{
        gd(iid){
           getDetail(iid).then(res =>{
               const data = res .result
                this.itemdata = res
                this.topimg = this.itemdata.result.itemInfo.topImages
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
                this.detailInfo = data.detailInfo  
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                if (data.rate.list) {
                    this.commentInfo = data.rate.list[0];
                }
                // this.$nextTick(() => {
                //     this.zhuti[0] = 0
                //     this.zhuti[1] = this.$refs.param.$el.offsetTop
                //     this.zhuti[2] = this.$refs.comment.$el.offsetTop
                //     this.zhuti[3] = this.$refs.tuijian.$el.offsetTop
                //     console.log(this.zhuti);
                // })          
            //    console.log(this.itemdata);
            //    console.log(this.topimg);
           })
        },
        gr(){
            getRecommend().then(res =>{
                console.log(res.data.list);
                this.list = res.data.list
            })
        },
        shuaxin(){
            const fudong = debonunce(this.$refs.scroll.refresh,300)
            fudong()

            const weizhi = debonunce(() =>{
                this.zhuti[0] = 0
                this.zhuti[1] = this.$refs.param.$el.offsetTop
                this.zhuti[2] = this.$refs.comment.$el.offsetTop
                this.zhuti[3] = this.$refs.tuijian.$el.offsetTop 
                // console.log(this.navbarpage); 
            },300)
            weizhi()
            // this.$refs.scroll.refresh()
        },
        tiaozhuan(index){
           this.$refs.scroll.scrollto(0,-this.zhuti[index],100)
        },
        scroll(data){
            this.scrollshow = (-data.y) > 1000    
            this.position = -data.y
            for (let i = 0; i < this.zhuti.length; i++) {
                let iPos = this.zhuti[i];
                if ((i < (this.zhuti.length-1) && this.position >= iPos && this.position < this.zhuti[i+1]) || (i === (this.zhuti.length-1) && this.position >= iPos)) {
                  if (this.navbarpage !== i) {
                    this.navbarpage = i; 
                    this.$refs.nav.currentindex = this.navbarpage   
                  }
                  break;
                }  
              }      
        },
    }
}
</script>

<style scoped>
.topi{
    height: 320px;
}
.detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
}
.gundong{
    height: calc(100% - 44px);
    overflow: hidden;
}
</style>