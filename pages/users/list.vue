<template>
  <div>
    <v-container grid-list-md>
      <h1>Users</h1>
      <v-layout wrap align-start justify-left>
        <v-flex v-for="user in users" xs12>
          <v-card raised :to="user.id.toString()">
            <v-card-text>
                <h3>{{user.firstName + ' ' + user.lastName}}</h3>
                <p>Email: {{user.email}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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