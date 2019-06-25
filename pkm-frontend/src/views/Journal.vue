<template>
  <div>
    <div class="text-center">
      <h1>Journal</h1>

      <div v-if="nodes.length === 0">
        <h4> No entries found at the moment </h4>
      </div>
    </div>
    <div v-if="isAuthenticated">
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="entry"> Quick Journal Entry </label>
          <input type="text" id="entry" v-model="text" name="entry" class="form-control" placeholder="Enter Something">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Add Journal Entry </button>
        </div>
      </form>
    </div>
    <hr>
    <v-table :data="nodes">
    <thead slot="head">
        <th>Subject</th>
        <th>Date</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.subject }}</td>
          <td>{{ row.date }}</td>
        </tr>
    </tbody>
  </v-table>
    
  </div>
</template>
<script>
import { server } from "@/utils/helper";
import axios from "axios";

export default {
  data() {
    return {
      isAuthenticated: true,
      text: '',
      nodes: []
    };
  },
  methods: {
    createPost () {
      console.log('NewJournal', this.$data.text)
    }
  }
};
</script>
<style>
</style>