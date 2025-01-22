<template>
    <div>
      <h1>Contact Us</h1>
      <form @submit.prevent="sendMessage">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
        
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        message: '',
      };
    },
    methods: {
      sendMessage() {
        // You can handle sending the message to an API or email here
        console.log('Message sent by', this.name, ':', this.message);
      }
    }
  }
  </script>
  