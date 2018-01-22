<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal">
          <router-link to="/">
            <el-menu-item index="1">
              Notes
            </el-menu-item>
          </router-link>
          <router-link to="/add">
            <el-menu-item index="2">
              Add Note
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
