<template>
  <v-col cols="12" md="6" class="DataCard">
    <horizontal-bar-chart-for-loan
      :title="
        $t('新型コロナウイルス関連の大分県における融資の利用状況 (業種別件数)')
      "
      :title-id="'usage-stats-by-industry'"
      :chart-data="ageGraph"
      :date="date"
      :unit="$t('件.tested')"
      :info="$t('累計値')"
      :url="
        'https://data.bodik.jp/dataset/_covid19_support/resource/a56764ef-baba-4972-8877-e773c24d27ca'
      "
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import HorizontalBarChartForLoan from '@/components/HorizontalBarChartForLoan.vue'

export default {
  components: {
    HorizontalBarChartForLoan
  },
  data() {
    return {
      date: String,
      ageGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      // const json = this.$store.state.data
      // this.ageGraph = formatVariableGraph(json.age.data)
      this.ageGraph = formatVariableGraph({
        飲食業: 189,
        'サービス業 (宿泊除く)': 167,
        小売業: 154,
        卸売業: 132,
        建設業: 98,
        宿泊業: 88,
        製造業: 64,
        その他: 12
      })
      // this.date = json.patients_summary.date
      this.date = '2020/06/06 18:09'
    }
  }
}
</script>
