<template>
  <div class="app-install">
    <h1>Install Shopify App</h1>
    <form @submit.prevent="installApp">
      <label for="shopName">Enter your Shopify store name:</label>
      <input
        type="text"
        id="shopName"
        v-model="shopName"
        placeholder="your-store-name"
        required
      />
      <button type="submit">Install</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRuntimeConfig } from "#app";

const shopName = ref(""); // Input field for Shopify store name
const errorMessage = ref(""); // Error message for user feedback

const installApp =async () => {
  const config = useRuntimeConfig();
  const clientId = config.public.CLIENT_ID;
  const host = config.public.HOST; // Correctly access HOST

  if (shopName.value.trim()) {
    const shopDomain = shopName.value.trim();
    const shopifyStoreUrl = `${shopDomain}.myshopify.com`; // Construct Shopify store URL

    try {
        // Sending the Shopify store URL to the backend via POST request
        let response = await fetch('/api/auth', {
            method: 'POST',  // Set method to POST
            headers: {
                'Content-Type': 'application/json',  // Set content type to JSON
            },
            body: JSON.stringify({ shopifyStoreUrl })  // Send the URL in the body
        });

        // Handle the response from the backend
        if (response.ok) {
            const data = await response.json();

       
        } else {
            console.log('Error:', response.statusText);
        }
    } catch (err) {
        console.log('Error:', err);
    }
   
  } else {    
    errorMessage.value = "Please enter a valid Shopify store name.";
  }
};
</script>

<style scoped>
.app-install {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005bb5;
}

.error {
  color: red; /* Style for error messages */
}
</style>
