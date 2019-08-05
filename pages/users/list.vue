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
import config from '../../config'
import axios from 'axios'
  export default {
    head () {
      return {
        title: 'All Users'
      }
    },
    async asyncData ({$axios, error}) {
      try {
        const {data: {data: users}} = await $axios.get(`${config.apiServer}/users`);
        console.log(users)
        return {
          users
        };
      } catch(err) {
        error({
          statusCode: 503,
          message: `Cannot fetch users. [ERR]: ${err}`
        })
      }
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>

</style>