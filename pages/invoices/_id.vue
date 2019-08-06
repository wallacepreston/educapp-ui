<template>
  <div>
    <v-container grid-list-md>
      <invoiceCard 
        :invoice="invoice"
      ></invoiceCard>
        
    </v-container>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import invoiceCard from '../../components/invoiceCard'

export default {
  components: {
    invoiceCard
  },
  head () {
    return {
      title: this.invoice.firstName + this.invoice.lastName
    }
  },
  async fetch ({store, error, params}) {
    try {
      await store.dispatch('invoices/fetchInvoice', params.id)
    } catch(err) {
      error({
        statusCode: 503,
        message: `Cannot fetch invoice # ${params.id}. [ERR]: ${err}`
      })
    }
  },
  computed: mapState({
    invoice: state => state.invoices.invoice
  })
}
</script>

<style scoped>

</style>