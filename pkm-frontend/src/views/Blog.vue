<template>
    <div>
      <div class="text-center">
        <div id="nav">
          <router-link to="/create">Create</router-link>
        </div>
        <h1>Blog Posts</h1>

       <div v-if="posts.length === 0">
            <h2> No post found at the moment </h2>
        </div>
      </div>
       
        <div class="row">
           <div class="col-md-4" v-for="post in posts" :key="post._id">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                   <h2 class="card-img-top">{{ post.title }}</h2>
                  <p class="card-text">{{ post.body }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" style="margin-bottom: 20px;">
                      <router-link :to="{name: 'Post', params: {id: post._id}}" class="btn btn-sm btn-outline-secondary">View Post </router-link>
                       <router-link :to="{name: 'Edit', params: {id: post._id}}" class="btn btn-sm btn-outline-secondary">Edit Post </router-link>
                       <button class="btn btn-sm btn-outline-secondary" v-on:click="deletePost(post._id)">Delete Post</button>
                    </div>
                  </div>

                  <div class="card-footer">
                    <small class="text-muted">Posted on: {{ post.date_posted}}</small><br/>
                    <small class="text-muted">by: {{ post.author}}</small>
                  </div>
                   
                </div>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { server } from "@/utils/helper";
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      return axios
        .get(`${server.baseURL}/pkm/posts`)
        .then(data => (this.posts = data.data));
    },
    deletePost(id) {
      axios.delete(`${server.baseURL}/pkm/delete?postID=${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>