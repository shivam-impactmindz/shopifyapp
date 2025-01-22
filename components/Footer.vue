<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  html, body {
    margin: 0;
    height: 100%;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .container {
    margin: auto;
  }
  </style>
  