<template>
  <v-col cols="12" md="6" class="DataCard">
    <patients-by-residence-table
      :title="$t('居住地別陽性患者数')"
      :title-id="'patients-by-residence'"
      :chart-data="chartData"
      :date="date"
      :info="info"
    />
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import PatientsByResidenceTable from '@/components/PatientsByResidenceTable.vue'

export default {
  components: {
    PatientsByResidenceTable
  },
  data() {
    const chartData = {
      headers: [],
      datasets: []
    }

    chartData.headers = [
      { text: this.$t('居住地'), value: 'label' },
      { text: this.$t('陽性患者数'), value: 'count', align: 'end' }
    ]

    const rawData = this.$store.state.data.patients.data
    const sumByResidence = rawData
      .reduce(function(result, current) {
        const element = result.find(function(p) {
          return p.label === current['居住地']
        })
        if (element) {
          element.count++
        } else {
          result.push({
            label: current['居住地'],
            count: 1
          })
        }
        return result
      }, [])
      .sort((a, b) => {
        // 患者数が多い順
        return b.count - a.count
      })

    for (const d of sumByResidence) {
      chartData.datasets.push({
        label: this.$t(d.label),
        count: d.count
      })
    }

    const date = dayjs(this.$store.state.data.patients.date).format(
      'YYYY/MM/DD HH:mm'
    )

    const info = {
      sText: this.$t('{date}の累計', {
        date: dayjs(this.$store.state.data.patients.date).format('M/DD')
      })
    }

    const data = {
      date,
      chartData,
      info
    }
    return data
  }
}
</script>
