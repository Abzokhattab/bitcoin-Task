import Vue from 'vue'
import App from './App.vue'


export const bus = new Vue();


import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}




Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
