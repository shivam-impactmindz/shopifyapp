<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About Us</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      <li><NuxtLink to="/appinstall">Store app install</NuxtLink></li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}

ul {
  display: flex;
  list-style-type: none;
}

li {
  margin-right: 20px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
