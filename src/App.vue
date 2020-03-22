<template>
  <div id="app">
    <el-menu :router='true' style="margin-bottom:10px" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">表单设计</el-menu-item>
      <el-menu-item index="/showpage">表单显示</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
