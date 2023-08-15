<script setup>
  import {useStore} from "vuex";
  import {computed, onMounted, ref, reactive} from "vue";
  import {notifySuccess, notifyWarning} from '../utils/toast.js'
  import Dialog from '../modules/dilogs.vue'


  const store = useStore();
  const todos = computed(() => store.getters.todos);
  onMounted(() => {
    store.dispatch("onFetch")
  });

  const deleteTodo = id => {
    store.dispatch('onDelete', id).then(() => {
      notifySuccess('Удалено!')
    }).catch((e) => {
      notifyWarning('Ошибка ' + e)
    });
  };


  const box = document.getElementsByClassName("card-container");

  function setDialog(dialog) {

    store.dispatch("onOpenDialog", {
      visible: true,
      data:dialog
    });
  }

</script>
<template>
    <Dialog></Dialog>
    <div class="card-container" v-if="todos">
        <VDContainer
                :width=box.offsetWidth
                :animation=false
                :data=todos
                type="sort"
                :key="todos"
        >
            <template v-slot:VDC="{data, index}">
                <div v-if="data.title && data.content" >
                    <el-card class="box-card" shadow="hover">
                        <template #header>
                            <div class="btn-card">
                                <el-button type="warning" @click="setDialog(data)">
                                    <el-icon>
                                        <View />
                                    </el-icon>
                                </el-button>
                                <el-button type="success">
                                    <el-icon>
                                        <CircleCheck/>
                                    </el-icon>
                                </el-button>
                                <el-button type="danger" @click="deleteTodo(data._id)">
                                    <el-icon>
                                        <Delete/>
                                    </el-icon>
                                </el-button>
                            </div>
                            <div class="card-header">
                                <span class="card-title">{{data.title}}</span>
                            </div>
                        </template>
                        <div class="text item" v-html="data.content"></div>
                    </el-card>
                </div>
            </template>
        </VDContainer>
    </div>

</template>

<style scoped type="scss">
    .box-card {
        width: 254px;
        height: 300px;
        margin: 5px 5px;
    }

    .card-header {
        display: flex;
        justify-content: center;
    }

    .card-container {
        display: flex;
    }

    .el-button + .el-button {
        margin-left: 1px;
    }

    .btn-card {
        display: flex;
        justify-content: end;
        position: relative;
        top: -18px;
        left: 20px;
        align-items: revert;
        float: right;


    }

    .btn-card > .el-button {
        height: 22px;
        padding: 8px 12px;
    }

</style>
