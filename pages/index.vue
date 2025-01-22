



<template>
  <div>
    <h1>Welcome to the Installed Shopify App</h1>
    <p>Your app is successfully installed and ready to use.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const shop = route.query.shop;

console.log("App loaded for shop:", shop);
</script>























<!-- <template>
  <div>
    <h1>Shopify Products</h1>
    <div v-if="loading">Loading products...</div>
    <div v-else>
      <div v-if="products.length > 0" class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
          <h3>{{ product.title }}</h3>
          <p v-html="product.body_html"></p>
          <p>Vendor: {{ product.vendor }}</p>
          <p>Product Type: {{ product.product_type }}</p>
          <p>Status: {{ product.status }}</p>
          <div v-for="variant in product.variants" :key="variant.id" class="variant-details">
            <p>Variant: {{ variant.title }}</p>
            <p>Price: ${{ variant.price }}</p>
            <p>Inventory: {{ variant.inventory_quantity }}</p>
          </div>
        </div>
      </div>
      <p v-else>No products available.</p>
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#imports';

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  const config = useRuntimeConfig(); // Access runtime configuration
  console.log("Access Token:", config.public.accessToken);
  console.log("Host:", config.public.host);
  const accessToken = config.public.accessToken; // Access token from runtime config
  const host = config.public.host; // Hostname from runtime config

  try {
    const response = await fetch('/api/product');
    console.log(response); 


    if (response.ok) {
      const data = await response.json();
      products.value = data.products || [];
    } else {
      console.error("Error fetching products:", response.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  } finally {
    loading.value = false;
  }
});
</script>


<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  background: #f9f9f9;
}

.variant-details {
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style> -->
