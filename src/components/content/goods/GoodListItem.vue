<template>
  <div class="gli" @click="tiaozhuan">
    <img :src="showimg" alt="" @load="shuaxin">
    <div class="gi">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}元</span>
        <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default(){}
        }
    },
    methods:{
      shuaxin(){
        this.$bus.$emit('shuaxin')
      },
      tiaozhuan(){
        // this.$router.push('detail/'+ this.item.iid )
        // this.$router.push('detail/'+ (this.item.iid || this.item.item_id))
        if(this.item.iid){
          this.$router.push('detail/'+ this.item.iid)
        }
        // else{
        //   this.$router.push(this.item.item_id)
        // }
      }
    },
    computed:{
      showimg(){
        // return this.item.show.img || this.item.image
        return this.item.image || this.item.show.img
        // return this.item.image || this.item.show.img
        // if(this.item.image){
        //   return this.item.image
        // }else{
        //   return this.item.show.img
        // }
      }
    }
}
</script>

<style scoped>
  .gli {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .gli img {
    width: 100%;
    border-radius: 5px;
    border:3px solid var(--color-tint);
  }

  .gi {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .gi p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .gi .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .gi .collect {
    position: relative;
  }

  .gi .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>