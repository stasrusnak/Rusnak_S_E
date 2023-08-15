<script setup>
  import {ref,  toRaw, computed,watch} from 'vue'
  import {useStore} from "vuex";
  const store = useStore();

  const openDialog = computed(() => store.getters.dialog);

  let visibleDialog = ref(true)

  watch(openDialog, (newopenDialog) => {
    // Do something with the updated value.
    console.log('newopenDialog')
    let data = toRaw(newopenDialog)
    visibleDialog =  data.visible
    console.log(visibleDialog)
  });

</script>

<template>

  <el-dialog v-model="visibleDialog" title="Shipping address" >
    This is dialog content.
  </el-dialog>

  <div :key="visibleDialog"> {{visibleDialog}} </div>
</template>


<style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
