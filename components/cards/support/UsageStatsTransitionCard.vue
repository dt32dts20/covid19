<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stack-chart
      :title="
        $t('新型コロナウイルス関連の大分県における融資の利用状況 (融資実績)')
      "
      :title-id="'usage-stats-transition'"
      :chart-id="'usage-stats-transition'"
      :chart-data="patientsGraph"
      :date="date"
      :unit="$t('億円')"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/9c609301-4800-4f06-a400-62ba5eb489ba'
      "
    />
  </v-col>
</template>

<script>
// import formatGraph from '@/utils/formatGraph'
import TimeStackChart from '@/components/TimeStackChart.vue'

export default {
  components: {
    TimeStackChart
  },
  data() {
    const inspectionsItems = [
      this.$t('① がんばろう！おおいた資金繰り応援資金'),
      this.$t('② 新型コロナウイルス感染症緊急対策特別資金')
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
        [0, 23.4, 96.5, 124.3, 168.3],
        [99.0, 122.3, 125.8, 128.1, 132.3]
      ]
      this.date = json.patients_summary.date
    }
  }
}
</script>
