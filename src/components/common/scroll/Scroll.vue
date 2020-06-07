<template>
  <div class="wrapper" ref="gundong">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default(){
                return 1
            },
        },
        pullUpLoad:{
             type:Boolean,
             default(){
                 return false
            }
        }
    },
    data(){
        return{
            scroll:null,
        }
    },
    mounted(){
        this.scroll= new Scroll(this.$refs.gundong,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullup')   
        })
    },
    methods:{
        scrollto(x,y,time=350){
            this.scroll.scrollTo(x,y,time)
        },
        finishpullup(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()      
        },
        getscrolly(){
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style>

</style>