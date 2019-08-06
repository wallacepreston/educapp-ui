<template>
  <div>
    <h2 v-if="!listItem">{{user.firstName + ' ' + user.lastName}}</h2>
    <v-card raised :to="listItem ? user.id.toString() : ''">
      <v-card-text>
        <h2 v-if="listItem">{{user.firstName + ' ' + user.lastName}}</h2>
        <p>Address: {{user.address}}</p>
        <p>Email: {{user.email}}</p>
        <p>Phone: {{user.phone}}</p>
      </v-card-text>
    </v-card>
        

  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    listItem: Boolean,
  }
}
</script>
