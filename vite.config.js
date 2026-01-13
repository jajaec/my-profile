import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages 배포 시 base 경로 설정
  base: '/my-profile/',
  // 개발 환경에서 CORS 우회를 위한 프록시 설정
  server: {
    port: 5173,
    strictPort: true, // 포트가 사용 중이면 에러 발생 (다른 포트로 변경하지 않음)
    proxy: {
      '/api': {
        target: 'https://order.iroyal.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/kakao-api': {
        target: 'https://dapi.kakao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kakao-api/, ''),
      },
    },
  },
})
