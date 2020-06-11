<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stack-chart
      :title="
        $t('新型コロナウイルス関連の大分県における融資の利用状況 (融資実績)')
      "
      :title-id="'usage-stats-transition'"
      :chart-id="'usage-stats-transition'"
      :chart-data="chartData"
      :date="date"
      :unit="$t('億円')"
      :items="legends"
      :labels="xLabels"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/9c609301-4800-4f06-a400-62ba5eb489ba'
      "
    />
  </v-col>
</template>

<script>
import { formatUsageStatsTransition } from '../../../utils/jsonToChartData'
import TimeStackChart from '@/components/TimeStackChart.vue'

export default {
  components: {
    TimeStackChart
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

      this.chartData = formatUsageStatsTransition(json.loan_achievements.data)
      this.legends = [
        '① ' + this.$t('がんばろう！おおいた資金繰り応援資金'),
        '② ' + this.$t('新型コロナウイルス感染症緊急対策特別資金')
      ]
      this.xLabels = json.loan_achievements.labels
      this.date = json.loan_achievements.date
    }
  }
}
</script>
