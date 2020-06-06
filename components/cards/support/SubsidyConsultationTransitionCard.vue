<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart-for-subsidy
      :title="$t('雇用調整助成金の申請に関する相談件数')"
      :title-id="'subsidy-consultation-transition'"
      :chart-id="'subsidy-consultation-transition'"
      :chart-data="patientsGraph"
      :date="date"
      :unit="$t('件.tested')"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
// import formatGraph from '@/utils/formatGraph'
import TimeChartForSubsidy from '@/components/TimeChartForSubsidy.vue'

export default {
  components: {
    TimeChartForSubsidy
  },
  data() {
    const inspectionsItems = [
      this.$t('① 労働局 (097-535-2100) への相談件数'),
      this.$t('② 大分県 (0120-575-625) への相談件数')
    ]
    const inspectionsLabels = ['5/1', '5/8', '5/15', '5/22', '5/29']

    return {
      date: String,
      patientsGraph: [],
      inspectionsItems,
      inspectionsLabels
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.data
      // const patientsGraph = formatGraph(json.patients_summary.data)
      this.patientsGraph = [
        [0, 40, 122, 168, 72],
        [63, 81, 69, 133, 144]
      ]
      this.date = json.patients_summary.date
    }
  }
}
</script>
