<template>
  <div>
    <v-card raised>
      <v-card-title>

      <h1>Users</h1>
      </v-card-title>
      <v-card-text>
        <div v-for="user in users">
          <p>Student Name: {{user.name}}</p>
          <p>Age: {{user.age}}</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        users: [
          { name: 'Sally', age: 10},
          { name: 'Robert', age: 12},
          { name: 'Bobby', age: 8},
          { name: 'Les', age: 50},
          { name: 'Ava', age: 3},
        ]
      }
    }
  }
</script>

<style scoped>

</style>