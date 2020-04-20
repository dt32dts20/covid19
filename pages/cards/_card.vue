<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <patients-detail-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <tested-number-card
      v-else-if="this.$route.params.card == 'number-of-tested-cases'"
    />
    <age-card v-else-if="this.$route.params.card == 'patients-by-age'" />
    <sickbeds-summary-card
      v-else-if="this.$route.params.card == 'patietns-and-sickedbeds'"
    />
    <consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-consultation-desk'
      "
    />
  </div>
</template>

<script>
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import PatientsDetailCard from '@/components/cards/PatientsDetailCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import AgeCard from '@/components/cards/AgeCard.vue'
import SickbedsSummaryCard from '@/components/cards/SickbedsSummaryCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    PatientsDetailCard,
    TestedNumberCard,
    AgeCard,
    SickbedsSummaryCard,
    ConsultationDeskReportsNumberCard
  },
  async fetch({ store, app: { $axios } }) {
    await $axios.get(process.env.apiUrl).then(response => {
      store.commit('setData', response.data)
    })
  },
  data() {
    let title
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        break
      case 'patients-by-age':
        title = this.$t('年代別陽性患者数')
        break
      case 'patietns-and-sickedbeds':
        title = this.$t('入院患者数と病床数')
        break
      case 'number-of-tested-cases':
        title = this.$t('検査実施数')
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = this.$t('相談窓口相談件数')
        break
    }

    const data = {
      title
    }
    return data
  },
  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。'
    )}`

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('大分県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            this.$t('対策サイト')
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
