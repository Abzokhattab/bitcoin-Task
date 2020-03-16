import { Bar } from "vue-chartjs";
import { bus } from "@/main.js";
export default {
  extends: Bar,
  created() {
    bus.$on("send", data => {
      const url =
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=" +
        data.time1 +
        "&end=" +
        data.time2;
      fetch(url).then(response => {
        response.json().then(data => {
          this.data = Object.values(data.bpi);
          this.renderChart({
            labels: Object.keys(data.bpi),
            datasets: [
              {
                label: "BitCoin",
                backgroundColor: "#f87979",
                data: this.data
              }
            ]
          });
        });
      });
    });
  }
};
