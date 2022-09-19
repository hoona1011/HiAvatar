// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import * as path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // resolve: {
//   //   alias: [{ find: '~', replacement: `${__dirname}/src` }]
//   // }

//   resolve: {
//     alias: {
//       '~': path.resolve(__dirname, 'src')
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()]
})

// export default defineConfig({
//   plugins: [tsconfigPaths()],
// })
