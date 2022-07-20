<template>
  <div id="app">
    <s-container fluid>
      <s-row>
        <s-col cols="8">1 of 3</s-col>
        <s-col>2 of 3</s-col>
        <s-col>3 of 3</s-col>
      </s-row>
      <s-row> <s-input v-model="data1" placeholder="请输入内容"></s-input></s-row>

      <s-pagination v-model="current" :total="pageTotal" :default-page-size="pageSize"></s-pagination>
      <span>123321</span>
    </s-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data: () => ({
      data1: 0,
      pageTotal: 20,

      pageSize: 10,
    }),
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
