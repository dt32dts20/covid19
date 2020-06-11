<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart-for-subsidy-application
      :title="$t('雇用調整助成金 (申請書提出件数、支給決定件数)')"
      :title-id="'subsidy-application-transition'"
      :chart-id="'subsidy-application-transition'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('件.tested')"
      :items="legends"
      :labels="xLabels"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/226c523f-178d-4180-8a1c-16e492757378'
      "
    />
  </v-col>
</template>

<script>
// import formatGraph from '@/utils/formatGraph'
import {
  formatSubsidyApplication,
  labelSubsidyApplication
} from '../../../utils/jsonToChartData'
import TimeChartForSubsidyApplication from '@/components/TimeChartForSubsidyApplication.vue'

export default {
  components: {
    TimeChartForSubsidyApplication
  },
  data() {
    return {
      date: String,
      chartData: [],
      legends: [],
      xLabels: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      const json = this.$store.state.support

      this.chartData = formatSubsidyApplication(json.subsidy_summary.data)
      this.legends = [
        '① ' + this.$t('申請書提出件数'),
        '② ' + this.$t('支給決定件数')
      ]
      this.xLabels = labelSubsidyApplication(json.subsidy_summary.data)
      this.date = json.subsidy_summary.date
    }
  }
}
</script>
