<template>
  <div>
    <v-container grid-list-md>
      <h1>Users</h1>
      <v-layout wrap align-start justify-left>
        <v-flex v-for="user in users" xs12>
          <userCard 
            :user="user"
            :listItem="true"
          ></userCard>
        </v-flex>
      </v-layout>
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
      title: 'All Users'
    }
  },
  async fetch ({ store, error }) {
    try {
      await store.dispatch('users/fetchUsers')
    } catch(err) {
      error({
        statusCode: 503,
        message: `Cannot fetch users. [ERR]: ${err}`
      })
    }
  },
  computed: mapState({
    users: state => state.users.users
  })
}
</script>

<style scoped>

</style>