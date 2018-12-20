<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          style="background:transparent">
          <router-link to="/">
            <el-menu-item index="1">
              Earth
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">Starbase</template>
            <router-link to="/starbase/people">
              <el-menu-item index="2-1">
                Characters
              </el-menu-item>
            </router-link>
            <router-link to="/starbase/planets">
              <el-menu-item index="2-2">
                Planets
              </el-menu-item>
            </router-link>
          </el-submenu>
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
};
</script>
<style>
body{
  margin:0;
  color:white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
  min-height:100vh;
  background:linear-gradient(#0b01016b,#060813c9), url('./assets/bg-compressor.jpeg');
  background-size:cover;
  background-position:center top;
}
.el-card, .el-message {
  border-radius: 1px;
  background-color: #352e6dcc;
  color: white;
  border: 1px solid #ebeef524;
  box-shadow: 0 2px 12px 0 rgba(20, 12, 37, 0.78);
}
.el-card__header {
  border-bottom: 1px solid #65759b24;
}
.el-loading-mask {
    background-color: rgba(72, 142, 123, 0.68);
}
.el-loading-spinner .path {
  stroke: #3bffbbe8;
}
.el-card{
  margin-bottom: 10px;
}
.el-menu a {
  text-decoration: none;
}
.el-menu a:hover {
  color:white;
}
.el-menu-demo .el-menu-item{
  color: #68c23a;
}
.el-menu-demo .el-submenu .el-submenu__title:hover,
.el-menu-demo .el-menu-item:hover {
  background-color: #2c59579e;
  color: white;
}
.el-menu-demo .el-submenu>.el-menu {
      border-radius: 1px;
    background-color: #352e6dcc;
    color: white;
    border: 1px solid #ebeef524;
}
.el-menu--horizontal .el-submenu .el-menu-item {
  background-color: transparent;
}
.el-menu-demo .el-submenu a {
  text-decoration: none;
}
.el-menu--horizontal .el-submenu .el-menu-item:hover {
  background-color: #2c59579e;
}
.el-menu--horizontal {
  border-bottom: solid 1px #72f5ef5c;
  display: flex;
}
.el-menu-demo .el-menu-item.is-active,
.el-menu-demo .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #409EFF;
    color: #409EFF;
    background-color: #2c59579e;
}
</style>
