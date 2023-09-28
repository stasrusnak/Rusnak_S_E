<script setup>
  import TipTap from './components/tipTap.vue'
  import Grid from './components/grid.vue'
  import Dialog from './modules/dilogs.vue'
</script>
<template>
    <div class="common-layout">
        <el-container  >
            <el-header>
                <el-menu default-active="1"
                         mode="horizontal"
                         background-color="#473558"
                         text-color="#fff"
                         active-text-color="#f3ff0b">
                    <el-menu-item index="0"></el-menu-item>
                    <el-menu-item index="1">Google Keep Analog</el-menu-item>
                    <el-menu-item index="2"  >
                        <a href="https://github.com/stasrusnak/Rusnak_S_E" target="_blank">Repository</a>
                         </el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <el-row type="flex" justify="center">
                    <el-col :xs="24" :sm="18" :md="14" :lg="20">
                        <TipTap  />
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col :xs="24" :sm="18" :md="14" :lg="20">
                        <Grid></Grid>
                    </el-col>
                </el-row>
            </el-main>
            <Dialog></Dialog>
        </el-container>
        <el-footer class="footer"><span class="footer-text">Todo list {{new Date().getFullYear() }}</span></el-footer>
    </div>
</template>



<style scoped type="scss">
    .el-main{
    max-width: 1280px;
        margin: 0 auto;
    }
    .footer{
        background-color: #473558;
        position: fixed;
        bottom: 0;
        width: 100%;

    }
    .footer-text{
        font-size: 14px;
        color: #f3ff0b;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
    }
</style>
