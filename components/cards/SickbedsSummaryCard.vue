<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('入院患者数と病床数')"
      :title-id="'patietns-and-sickedbeds'"
      :chart-data="sickbedsGraph"
      :date="date"
      :unit="$t('床')"
      :info="$t('入院患者数') + '/' + $t('病床数')"
      :url="'https://www.pref.oita.jp/site/bosaianzen/shingatacorona.html'"
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChart from '@/components/CircleChart.vue'

export default {
  components: {
    CircleChart
  },
  data() {
    return {
      date: String,
      sickbedsGraph: []
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
          this.sickbedsGraph = formatVariableGraph(json.sickbeds_summary.data)
          this.date = json.sickbeds_summary.date
        })
        .catch(error => {
          this.date = error
        })
    }
  }
}
</script>
