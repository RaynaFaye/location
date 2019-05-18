<script>
import { Pie } from "vue-chartjs";
import ChartJsPluginDataLabels from "chartjs-plugin-labels";
export default {
  extends: Pie,
  props: ["dataSet", "dataSetPercentage"],
  data() {
    return {
      newDataSet: [],
      chartData: {
        labels: [
          "Très Satisfait",
          "Satisfait",
          "Assez Satisfait",
          "Plutôt Mécontent",
          "Très Mécontent"
        ],
        datasets: [
          {
            data: [...this.dataSetPercentage],
            backgroundColor: ["#00d61d", "#00aeff", "yellow", "orange", "red"]
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom",
          labels: {
            fontSize: 14,
            fontStyle: "bold",
            padding: 25,
            usePointStyle: true
          }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return (
                data["labels"][tooltipItem["index"]] +
                ": " +
                data["datasets"][0]["data"][tooltipItem["index"]] +
                "%"
              );
            }
          }
        },
        plugins: {
          labels: [
            {
              render: "percentage",
              fontColor: "#000000",
              position: "border"
            },
            {
              render: "label",
              position: "outside",
              outsidePadding: 15,
              fontColor: "#000000",
              fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
              arc: true,
              overlap: false
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
