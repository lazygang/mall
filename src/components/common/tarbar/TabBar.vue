<template>
  <div id="tb">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#tb{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 2px rgba(100,100,100,0.5);
}
</style>