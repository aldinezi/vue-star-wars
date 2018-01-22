<template>
    <el-row :gutter="10">
      <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="3"
        v-for="(note, key) in notes" v-bind:key="key">
        <el-card v-bind:class="[note.important ? 'important' : 'regular','box-card']">
          <div slot="header" class="clearfix">
            <span>{{note.name}}</span>
            <el-button style="float: right; padding: 3px 0"
              type="text"
              @click="removeNote(key)">
              <i class="el-icon-remove-outline"></i>
            </el-button>
          </div>
          <div class="text item">
            {{note.text}}
          </div>
          <time class="time">{{ note.time | formatDate }}</time>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Notes',
  data() {
    return {
    };
  },
  beforeCreate() {
    this.$store.dispatch('loadNotes');
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
  mounted() {
  },
  methods: {
    removeNote(key) {
      console.log(key);
      this.$store.dispatch('removeNote', key);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
