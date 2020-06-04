<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <share-buttons />
    <card-row class="DataBlock">
      <patients-transition-card />
      <usage-stats-by-industry-card />
      <patients-by-age-card />
      <sickbeds-used-rate-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import ShareButtons from '@/components/ShareButtons.vue'
import CardRow from '@/components/cards/CardRow.vue'
import PatientsTransitionCard from '@/components/cards/PatientsTransitionCard.vue'
import UsageStatsByIndustryCard from '@/components/cards/support/UsageStatsByIndustryCard.vue'
import PatientsByAgeCard from '@/components/cards/PatientsByAgeCard.vue'
import SickbedsUsedRateCard from '@/components/cards/SickbedsUsedRateCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    ShareButtons,
    CardRow,
    PatientsTransitionCard,
    UsageStatsByIndustryCard,
    PatientsByAgeCard,
    SickbedsUsedRateCard
  },
  async fetch({ store, app }) {
    await app.$axios.get(app.$env.apiUrl).then((response: any) => {
      store.commit('setData', response.data)
    })
    await app.$axios.get(app.$env.newsUrl).then((response: any) => {
      store.commit('setNews', response.data)
    })
  },
  data() {
    const data = {
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新支援状況')
      },
      newsItems: this.$store.state.news.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新支援状況') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
