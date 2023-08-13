<script setup>
  import TipTap from './components/tipTap.vue'
  import Grid from './components/grid.vue'
  import Grid1 from './components/grid1.vue'
</script>
<template>

    <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="18" :md="14" :lg="12">
            <TipTap/>
        </el-col>
    </el-row>
    <Grid></Grid>
<!--    <Grid1></Grid1>-->
</template>

<style scoped>

</style>
