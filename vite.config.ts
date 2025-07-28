import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_react_phone-catalog/', 
  plugins: [react()],
});
