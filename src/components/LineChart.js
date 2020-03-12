import { Bar } from 'vue-chartjs'
import {bus}from '@/main.js';
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
  extends: Bar,
  created(){
    bus.$on('send',(data)=>{
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start='+data.time1+'&end='+data.time2
      fetch(url).then((response)=>{
        response.json().then((data)=>{
          this.data=Object.values(data.bpi)


          this.renderChart({
            labels: Object.keys(data.bpi) ,
            datasets: [
              {
                label: 'BitCoin',
                backgroundColor: '#f87979',
                data: this.data
              }
            ]
          })
            

        })
      })  })
  },
  mounted () {
    /*axios
    .get(url)
    .then(response => (this.info = response.data.bpi))*/

    // Overwriting base render method with actual data.
 
  }
}