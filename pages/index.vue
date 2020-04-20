<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <div>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
        >Tweet</a
      >
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Foita.stopcovid19.jp%2F&layout=button_count&size=small&appId=113749536134548&width=100&height=20"
        width="100"
        height="20"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
    </div>
    <whats-new :items="newsItems" />
    <v-row class="DataBlock">
      <patients-breakdown-card />
      <patients-transition-card />
      <patients-detail-card />
      <tested-number-card />
      <age-card />
      <sickbeds-used-rate-card />
      <consultations-transition-card />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import PatientsBreakdownCard from '@/components/cards/PatientsBreakdownCard.vue'
import PatientsTransitionCard from '@/components/cards/PatientsTransitionCard.vue'
import PatientsDetailCard from '@/components/cards/PatientsDetailCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import AgeCard from '@/components/cards/AgeCard.vue'
import SickbedsUsedRateCard from '@/components/cards/SickbedsUsedRateCard.vue'
import ConsultationsTransitionCard from '@/components/cards/ConsultationsTransitionCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    PatientsBreakdownCard,
    PatientsTransitionCard,
    PatientsDetailCard,
    TestedNumberCard,
    AgeCard,
    SickbedsUsedRateCard,
    ConsultationsTransitionCard
  },
  async fetch({ store, app: { $axios } }) {
    await $axios.get(process.env.apiUrl).then((response: any) => {
      store.commit('setData', response.data)
    })
    await $axios.get(process.env.newsUrl).then((response: any) => {
      store.commit('setNews', response.data)
    })
  },
  data() {
    const data = {
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向')
      },
      newsItems: this.$store.state.news.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string
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
