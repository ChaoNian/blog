<template>
  <div >
     我是威优易
     <div>
        {{  moment().format('YYYY-MM-DD HH:mm:ss')}}
     </div>
  </div>
</template>

<script setup lang='ts'>
import moment from 'moment'
</script>

<style scoped lang="less">
body,html {
   background-color: red;
}
</style>