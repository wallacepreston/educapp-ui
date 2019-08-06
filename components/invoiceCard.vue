<template>
  <div>
    <h2 v-if="!listItem">Invoice #{{invoice.id}}</h2>
    <v-card raised :to="listItem ? invoice.id.toString() : ''">
      <v-card-text>
        <h2 v-if="listItem">Invoice #{{invoice.id}}</h2>
        <p>Status: {{invoice.isPaid ? 'Paid' : 'Not Paid'}}</p>
        <p>Invoice Sent: {{invoice.sentOnDate}}</p>
        <p>Total Amount: ${{invoice.session.hours * 40}}</p>
        <div v-if="!listItem">
          <p>Payment Method: {{invoice.paymentMethod}}</p>
          <p>Description: {{invoice.description}}</p>
        </div>
      </v-card-text>
    </v-card>
        

  </div>
</template>

<script>
export default {
  props: {
    invoice: Object,
    listItem: Boolean,
  }
}
</script>
