import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // هذا السطر ضروري جداً عشان الصور والملفات تظهر صح على GitHub
  base: '/clinic/', 
});