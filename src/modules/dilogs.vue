<script setup>
  import {computed} from 'vue'
  import {useStore} from "vuex";
  const store = useStore();
  const openDialog = computed(() =>
        store.getters.dialog
  );


</script>

<template>
    <el-dialog v-model="openDialog.visible" :show-close="false" class="dialog">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <span :id="titleId" :class="titleClass">{{openDialog.data.title}}</span>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"> <CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </div>
      </template>
      <div class="dialogBody" v-html="openDialog.data.content"></div>
    </el-dialog>
</template>


<style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .dialogBody{
    overflow-y:auto;
  }
</style>
