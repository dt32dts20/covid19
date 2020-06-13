<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-chart-for-subsidy
      :title="$t('雇用調整助成金の申請に関する相談件数')"
      :title-id="'subsidy-consultation-transition'"
      :chart-id="'subsidy-consultation-transition'"
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
import { formatSubsidyConsultation } from '../../../utils/jsonToChartData'
import TimeChartForSubsidy from '@/components/TimeChartForSubsidy.vue'

export default {
  components: {
    TimeChartForSubsidy
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

      this.chartData = formatSubsidyConsultation(json.subsidy.data)
      this.legends = [
        '① ' + this.$t('労働局 (TEL 097-535-2100) への相談件数'),
        '② ' + this.$t('大分県 (TEL 0120-575-626) への相談件数')
      ]
      this.xLabels = json.subsidy.labels
      this.date = json.subsidy.date
    }
  }
}
</script>
