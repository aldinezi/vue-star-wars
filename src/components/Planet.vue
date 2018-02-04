<template>
  <div @click="onPlanetClick()" v-loading="loading">
    <el-card v-if="planet">
      <div slot="header" class="clearfix">
        <span>{{planet.name}}</span>
        <el-button style="float: right; padding: 3px 0"
          type="text">
          <i class="el-icon-remove-outline"></i>
        </el-button>
      </div>
      <div class="text item">
        <div>Climate: {{planet.climate}}</div>
        <div>Terrain: {{planet.terrain}}</div>
        <div>Population: {{planet.population}}</div>
      </div>
      <time class="time"></time>
    </el-card>
    <el-card v-if="!planet" >
      <div slot="header" class="clearfix">
        <span>No planet data.</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Planet',
  props: {
    // basic type check (`null` means accept any type)
    id: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
    };
  },
  beforeCreated() {
  },
  mounted() {
    this.$store.dispatch('fetchPlanetById', { id: this.id, index: this.index, type: this.$route.params.type });
  },
  computed: {
    planet() {
      return this.$store.state.planets[this.index];
    },
    loading() {
      return this.$store.state.loading[`${this.$route.params.type}${this.index}`];
    },
  },
  methods: {
    onPlanetClick() {
      console.log('submit!');
      this.$store.dispatch('fetchRandomPlanet', { index: this.index, type: this.$route.params.type });
    },
  },
};
</script>
