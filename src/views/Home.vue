<template>
  <div class="home">
    <h1>Welcome to Academy</h1>
    <div class="courses">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div v-for="course in courses" class="course-item" :key="course._id">
          <router-link :to="`/academy/${course.slug.current}`">
            <h2>{{ course.title }}</h2>
          </router-link>
          <p>{{course.excerpt}}</p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const query = `*[_type == "course"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      courses: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.course = null;
      this.loading = true;
      sanity.fetch(query).then(
        (courses) => {
          this.loading = false;
          this.courses = courses;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.home h1{
    text-align: center;

}
.container {
  margin: 0 auto;
  max-width: 42em;
  width: 100%;
}
.course-item {
  box-sizing: border-box;
}
</style>