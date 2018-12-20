<template>
  <div>
    <el-row :gutter="10" id="mainRow">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
        v-for="(id, index) in initialCharacterIds"
        :key="index">
        <Character :id="id" :index="index" :type="type" ></Character>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"
        v-for="(id, index) in initialPlanets"
        :key="index">
        <Planet :id="id" :index="index" :type="type"></Planet>
      </el-col>
    </el-row>
    <el-row :gutter="10">
        <el-col :xs="24" :xl="24"
          v-if="type === 'people'">
          <div class="falconShip" v-bind:style="calculated" >
              <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="6"
                v-for="(member, index) in shipCrew"
                :key="index">
                <CharacterAtShip :member="member" :id="index"></CharacterAtShip>
              </el-col>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Character from './Character';
import Planet from './Planet';
import CharacterAtShip from './CharacterAtShip';

export default {
  name: 'Starbase',
  components: {
    Character,
    CharacterAtShip,
    Planet,
  },
  data() {
    return {
      calculated: {},
    };
  },
  computed: {
    type() {
      return this.$route.params.type;
    },
    initialCharacterIds() {
      return this.type === 'people' ? this.$store.getters.initialCharacterIds : [];
    },
    initialPlanets() {
      return this.type === 'planets' ? this.$store.getters.initialPlanetIds : [];
    },
    shipCrew() {
      return this.$store.getters.shipCrew;
    },
  },
};
</script>
<style>
.falconShip{
  min-height: 300px;
  background:rgba(47, 79, 79, 0.7);
  overflow: auto;
  padding: 10px 5px 0;
}
.wrapper{
  width:100%;
  height: 400px;
  max-height: 400px;
}
</style>
