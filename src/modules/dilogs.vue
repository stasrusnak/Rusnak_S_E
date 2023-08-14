<script setup>
  import { ref, defineProps ,defineEmits,watch} from 'vue'
  import { ElButton, ElDialog } from 'element-plus'
  import { CircleCloseFilled } from '@element-plus/icons-vue'

  const props = defineProps({
    data: Object,
    visible: Boolean
  })
  console.log(props.visible)

  watch(close, (close, prevCount) => {
    /* ... */
    console.log(close)
  })

</script>

<template>

  <el-dialog v-model="props.visible" :show-close="false" >
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger"  @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is dialog content.
  </el-dialog>
</template>


<style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
