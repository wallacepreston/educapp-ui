<template>
  <div>
    <v-container grid-list-md>
      <userCard 
        :user="user"
      ></userCard>
        
    </v-container>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import userCard from '../../components/userCard'

export default {
  components: {
    userCard
  },
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