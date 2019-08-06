<template>
  <div>
    <v-container grid-list-md>
      <h1>{{user.firstName + ' ' + user.lastName}}</h1>
      
          <v-card raised>
            <v-card-text>
                <p>Address: {{user.address}}</p>
                <p>Email: {{user.email}}</p>
                <p>Phone: {{user.phone}}</p>
            </v-card-text>
          </v-card>
        
    </v-container>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.user.firstName + this.user.lastName
    }
  },
  async fetch ({store, error, params}) {
    try {
      await store.dispatch('users/fetchUser', params.id)
    } catch(err) {
      error({
        statusCode: 503,
        message: `Cannot fetch user # ${params.id}. [ERR]: ${err}`
      })
    }
  },
  computed: mapState({
    user: state => state.users.user
  })
}
</script>

<style scoped>

</style>