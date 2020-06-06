<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart-for-subsidy-application
      :title="$t('雇用調整助成金 (申請書提出件数、支給決定件数)')"
      :title-id="'subsidy-application-transition'"
      :chart-id="'subsidy-application-transition'"
      :chart-data="patientsGraph"
      :date="date"
      :unit="$t('件.tested')"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/226c523f-178d-4180-8a1c-16e492757378'
      "
    />
  </v-col>
</template>

<script>
// import formatGraph from '@/utils/formatGraph'
import TimeChartForSubsidyApplication from '@/components/TimeChartForSubsidyApplication.vue'

export default {
  components: {
    TimeChartForSubsidyApplication
  },
  data() {
    const inspectionsItems = [
      this.$t('① 申請書提出件数'),
      this.$t('② 支給決定件数')
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
        [63, 69, 81, 133, 144],
        [0, 40, 72, 122, 132]
      ]
      this.date = json.patients_summary.date
    }
  }
}
</script>
