<template>
  <div class="color-box">
    <div class="color-value">{{name}}</div>
    <div class="color-preview" :style="'background:' + value"></div>
  </div>
</template>

<script>
export default {
  props: ['name', 'value']
}
</script>

<style scoped lang="scss">
.color-box {
  display: inline-block;
  padding: 20px;
}

.color-value {
  margin-bottom: 5px;
  text-align: center;
}

.color-preview {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid;
}
</style>
