import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
  
// })
export default defineConfig({
  // ... other configurations
  plugins: [react()],
  // server: {
  //   host: true, // Allow access from other devices on the network
  // },
});
