<template>
  <div id="app">
    <h3>BitCoin Chart</h3>
    <FavChart />
    <date />
  </div>
</template>

<script>
import FavChart from "./components/FavChart";
import date from "./components/date";
export default {
  name: "App",
  components: {
    FavChart,
    date
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  margin-top: 60px;
}
</style>
