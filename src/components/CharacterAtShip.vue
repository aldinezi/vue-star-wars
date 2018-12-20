<template>
  <div @click="onCharacterClick()"
    v-if="member">
      <el-card class="ship-member" :body-style="{ padding: '10px' }">
          <el-row :gutter="20">
            <el-col :span="18" class="name">
              {{member.name}}
            </el-col>
            <el-col :span="6">
                <el-button type="danger"
                  icon="el-icon-remove"
                  @click.stop.prevent="removeFromShip()"
                  >
                </el-button>
            </el-col>
          </el-row>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'CharacterAtShip',
  props: {
    id: {
      type: String,
    },
    member: {
      type: Object,
    },
  },
  computed: {
    urlId() {
      return this.member.url.match(/(\d*)(?=\/$)/g)[0];
    },
  },
  methods: {
    onCharacterClick() {
      console.log('submit!');
    },
    removeFromShip() {
      this.$store.dispatch('removeFromShip', { id: this.urlId });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-button {
  padding: 4px 12px;
}
.ship-member{
  .el-card__body{
    padding: 10px;
  }
  .name {
    line-height: 24px;
  }
}
</style>
