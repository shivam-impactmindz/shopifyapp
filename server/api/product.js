// server/api/products.js
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const accessToken = config.public.accessToken;
    


    try {
      const response = await $fetch(`https://shivam12store.myshopify.com/admin/api/2025-01/products.json`, {
        headers: {
          "X-Shopify-Access-Token": accessToken,
          "Content-Type": "application/json",
        },
      });
  
 
       return response;
    
    } catch (error) {
      console.error("Fetch error:", error);
      return { error: "Failed to fetch products" };
    }
  });
