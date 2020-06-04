<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <share-buttons />
    <card-row class="DataBlock">
      <usage-stats-by-industry-card />
      <usage-stats-transition-card />
      <subsidy-consultation-transition-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import ShareButtons from '@/components/ShareButtons.vue'
import CardRow from '@/components/cards/CardRow.vue'
import UsageStatsByIndustryCard from '@/components/cards/support/UsageStatsByIndustryCard.vue'
import UsageStatsTransitionCard from '@/components/cards/support/UsageStatsTransitionCard.vue'
import SubsidyConsultationTransitionCard from '@/components/cards/support/SubsidyConsultationTransitionCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    ShareButtons,
    CardRow,
    UsageStatsByIndustryCard,
    UsageStatsTransitionCard,
    SubsidyConsultationTransitionCard
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
