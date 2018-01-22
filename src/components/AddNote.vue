<template>
    <el-form ref="form" :model="note" label-width="120px">
        <el-form-item label="Activity name">
            <el-input v-model="note.name"></el-input>
        </el-form-item>
        <el-form-item label="Note text">
            <el-input type="textarea" v-model="note.text"></el-input>
        </el-form-item>
        <el-form-item label="Important">
            <el-switch v-model="note.important"></el-switch>
        </el-form-item>
        <el-form-item label="Date of reminder">
          <el-date-picker
            v-model="note.time"
            type="date"
            placeholder="Pick a date">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'AddNote',
  data() {
    return {
      note: {
        name: '',
        text: '',
        important: false,
        time: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addNote', this.note);
      console.log('submit!', this.note);
      this.clearForm();
    },
    clearForm() {
      this.note = {
        name: '',
        text: '',
        important: false,
        time: '',
      };
    },
  },
};
</script>
