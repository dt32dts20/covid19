<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart-for-age
      :title="$t('年代別陽性患者数')"
      :title-id="'patients-by-age'"
      :chart-data="ageGraph"
      :date="date"
      :unit="$t('人')"
      :info="$t('累計値')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChartForAge from '@/components/CircleChartForAge.vue'

export default {
  components: {
    CircleChartForAge
  },
  data() {
    return {
      date: String,
      ageGraph: []
    }
  },
  created() {
    this.setDataUsingAPI()
  },
  methods: {
    async setDataUsingAPI() {
      await this.$axios
        .get('https://data-covid19-oita.netlify.com/json/data.json')
        .then(response => {
          const json = response.data
          this.ageGraph = formatVariableGraph(json.age.data)
          this.date = json.age.date
        })
        .catch(error => {
          this.date = error
        })
    }
  }
}
</script>
