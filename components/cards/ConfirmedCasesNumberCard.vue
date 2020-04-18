<template>
  <v-col cols="12" md="6" class="DataCard">
    <line-chart
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
import LineChart from '@/components/LineChart.vue'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      date: String,
      patientsGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      this.patientsGraph = formatGraph(json.patients_summary.data)
      this.date = json.patients_summary.date
    }
  }
}
</script>
