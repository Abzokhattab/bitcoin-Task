import { Bar } from 'vue-chartjs'
//const request = import ('request');
const url='https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05'
/*request({url:url,json:true},(error,response)=>{
  console.log(response.body)
})*/

fetch(url).then((response)=>{
  response.json().then((data)=>{
      console.log(data.bpi)
  })
})

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}