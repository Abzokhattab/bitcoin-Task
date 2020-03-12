<template>
  <div class="small">
    <line-chart></line-chart>
  </div>
</template>



<script>


  import LineChart from './LineChart.js'

//import axios from 'axios';
//const request = import ('request');
/*
const url='https://api.coindesk.com/v1/bpi/historical/close.json?start'+from+'&end=2013-09-05'
request({url:url,json:true},(error,response)=>{
  console.log(response.body)
})

fetch(url).then((response)=>{
  response.json().then((data)=>{
      console.log(data.bpi)
  })
})
   fetch('/upload').then((response)=>{
  response.json().then((Da)=>{
    console.log(Da)
  })
})


*/
export default {
  components: {
      LineChart
  }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>