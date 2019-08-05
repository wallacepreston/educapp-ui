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
import config from '../../config'
import axios from 'axios'
  export default {
    head () {
      return {
        title: `User # ${this.id}`
      }
    },
    async asyncData ({$axios, error, params}) {
      try {
        const {data: user} = await $axios.get(`${config.apiServer}/users/${params.id}`);
        return {
          user
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
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>