<template>
  <div>
    <v-container grid-list-md>
      <h1>Invoices</h1>
      <v-layout wrap align-start justify-left>
        <v-flex v-for="invoice in invoices" xs12>
          <invoiceCard 
            :invoice="invoice"
            :listItem="true"
          ></invoiceCard>
        </v-flex>
      </v-layout>
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
      title: 'All Invoices'
    }
  },
  async fetch ({ store, error }) {
    try {
      await store.dispatch('invoices/fetchInvoices')
    } catch(err) {
      error({
        statusCode: 503,
        message: `Cannot fetch invoices. [ERR]: ${err}`
      })
    }
  },
  computed: mapState({
    invoices: state => state.invoices.invoices
  })
}
</script>

<style scoped>

</style>