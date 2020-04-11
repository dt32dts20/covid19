<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="date"
      :unit="$t('人')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    return {
      date: String,
      patientsGraph: []
    }
  },
  created() {
    this.setDataUsingAPI()
  },
  methods: {
    async setDataUsingAPI() {
      await this.$axios
        .get(process.env.apiUrl)
        .then(response => {
          const json = response.data
          this.patientsGraph = formatGraph(json.patients_summary.data)
          this.date = json.patients_summary.date
        })
        .catch(error => {
          this.date = error
        })
    }
  }
}
</script>
