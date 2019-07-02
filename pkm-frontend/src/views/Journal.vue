<template>
  <div>
    <div class="text-center">
      <h1>Journal</h1>

      <div v-if="posts.length === 0">
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
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="journalTable"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-table 
      striped hover
      :id="journalTable"
      :items="posts" 
      :fields="fields"
      :perPage="perPage"
      >
      <template slot="view" slot-scope="row">
        <b-button size="sm" @click="view(row.index)" class="mr-1">
          View
        </b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
// TODO: add author to table
import { server } from "@/utils/helper";
import axios from "axios";
const uuidv4 = require('uuid/v4')

export default {
// @see https://bootstrap-vue.js.org/docs/components/pagination/
// @see https://bootstrap-vue.js.org/docs/components/table/

  data() {
    return {
      isAuthenticated: true,
      text: '',
      author: 'Joe',
      perPage: 20,
      currentPage: 1,
      rows: 0,
      fields: [{
            key: 'title',
            sortable: true
          },
          {
            key: 'date_posted',
            sortable: false
          }, 'view'],
      posts: []
    };
  },
  methods: {
    view(index) {
      //index is actually row index
      var id = this.posts[index]._id; 
      console.log('VIEW', id);
      this.$router.push("/post/"+id);
    },
    createPost () {
      // console.log('NewJournal', this.$data.text)
      let postData = {
        nodeId: uuidv4(),
        nodeType: "QuickType",
        title: this.text,
        description: '',
        body: '',
        author: this.author,
        date_posted: new Date().toLocaleDateString()
      };
      this.__submitToServer(postData);
    },
    __submitToServer (data) {
      axios.post(`${server.baseURL}/pkm/post`, data).then(data => {
        console.log(data);
        window.location.reload();
      });
    },
    fetchPosts () {
      // This will fetch every node in the Posts database
      // TODO maybe it should not
      return axios
        .get(`${server.baseURL}/pkm/journal`)
        .then(data => (this.posts = data.data));
    }
  },
  async mounted () {
    await this.fetchPosts();
    this.$data.rows = this.$data.posts.length;
    console.log('Journal', this.posts);
    // TODO this is not receiving the data even though
    // console logs in pkm.controller says the same kind of data
    // is being made available as with the blogs - which work
  }
};
</script>
<style>
</style>