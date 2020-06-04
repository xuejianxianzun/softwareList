<template>
  <div class="categoryWrap">
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class CategoryList extends Vue {
  private msg = '111'
}
</script>

<style lang="less" scoped>
.categoryWrap {
  display: flex;
}
</style>
