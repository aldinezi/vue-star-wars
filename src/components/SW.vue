<template>
    <el-row :gutter="10" type="flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :offset="6">
        <el-card >
        <div slot="header" class="clearfix">
          <span>STAR WARS</span>
        </div>
        <div class="text item">
            <p>Welcome to senseless Star Wars app!</p><br>
            <p>This SPA was made to utilize basic goodies of <span class="green">VueJS</span>,
              Vuex, vue-router,
              vue-loader, Element-UI, webpack,
              axios and few other technologies.</p>
            <p>This was made entirely by fallowing Udemy course and googling,
              while it's senseless functionality is
              just for showcasing previously stated technologies,
              using open source API
              <a href="https://swapi.co/"
                target="_blank"
                class="link">Star Wars API</a>.
            </p><br>
            <p>Head on to 'Starbase' -> 'Characters' from menu,
              and add your favourite characters to your ship.
              If listed characters are not your favs, fetch new ones by clicking on current.</p>
            <small>Adin Neziric,<br> January, 2018.</small>
        </div>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'SW',
};
</script>

<style>
.el-card.important.box-card {
  background: #F56C6C;
  color: white;
}
.el-card.regular.box-card {
  background: #409EFF;
  color: white;
}
.el-card__header {
  font-weight: bold;
}
.el-icon-remove-outline{
  color:darkred;
}
a.link {
    color: yellow;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
}
.green {
    color: rgb(31, 254, 170);
    font-weight: 600;
}
</style>
