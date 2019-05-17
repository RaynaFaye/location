<template>
  <div>
    <h1>Dashboard</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://localhost/locationquestionnaire/fetchdata.php")
      .then(response => {
        console.log(response);
      });
  }
};
</script>

<style>
</style>
