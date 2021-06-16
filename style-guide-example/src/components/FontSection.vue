<template>
  <div class="font-section">
    <div class="font-name">
      <h3>Font variable name:</h3> {{name}}
    </div> 
    <h5>Preview</h5>
    <div class="font-preview" :style="'font-family:' + value">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'value']
}
</script>

<style scoped lang="scss">
.font-section {
  margin-bottom: 20px;

  .font-name {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    h3 {
      margin: 0 7px 0 0;
    }
  }
}

.font-preview {
  background-color: #f0f4f7;
  padding: 20px;
  width: 700px;
}
</style>
