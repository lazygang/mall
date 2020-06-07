<template>
  <div class="gl">
        <good-list-item v-for="(i,index) in list" :item="i" :key="index"/>
  </div>
</template>

<script>
import GoodListItem from 'components/content/goods/GoodListItem'
export default {
    props:{
        list:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        GoodListItem
    }
}
// console.log(list);

</script>

<style scoped>
  .gl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }
</style>