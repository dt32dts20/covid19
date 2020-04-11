<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested-cases'"
      :chart-id="'time-bar-chart-tested'"
      :chart-data="inspectionsGraph"
      :date="date"
      :unit="$t('件.tested')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/TimeBarChart.vue'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart
  },
  data() {
    return {
      date: String,
      inspectionsGraph: []
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
          this.inspectionsGraph = formatGraph(json.inspections_summary.data)
          this.date = json.inspections_summary.date
        })
        .catch(error => {
          this.date = error
        })
    }
  }
}
</script>
