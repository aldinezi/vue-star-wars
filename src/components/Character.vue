<template>
  <div @click="onCharacterClick()"
    v-loading="loading"
    v-if="character">
      <el-card>
        <div slot="header"
        class="clearfix">
          <span>{{character.name}}</span>
        </div>
          <div class="text item">
            <el-row :gutter="20">
              <el-col :span="16">
                <div>Height: {{character.height}}</div>
                <div>Mass: {{character.mass}}</div>
                <div>Eye color: {{character.eye_color}}</div>
              </el-col>
              <el-col :span="8">
                <el-button type="success"
                  round
                  icon="el-icon-circle-plus"
                  @click.stop.prevent="addToShip()"
                  v-if="ship.indexOf(urlId) === -1">
                    Add
                </el-button>
              </el-col>
            </el-row>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    id: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  mounted() {
    this.$store.dispatch('fetchCharacterById', { id: this.id, index: this.index, type: this.$route.params.type });
  },
  computed: {
    character() {
      return this.$store.state.people[this.index];
    },
    loading() {
      return this.$store.state.loading[`${this.$route.params.type}${this.index}`];
    },
    urlId() {
      return this.character.url.match(/(\d*)(?=\/$)/g)[0];
    },
    ship() {
      return this.$store.state.ship;
    },
  },
  methods: {
    onCharacterClick() {
      this.$store.dispatch('fetchRandomCharacter', { index: this.index, type: this.$route.params.type });
    },
    addToShip() {
      this.$store.dispatch('addToShip', { id: this.urlId, character: this.character });
    },
  },
};
</script>
