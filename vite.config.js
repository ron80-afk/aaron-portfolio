import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact.js'

const localContactApi = () => ({
  name: 'local-contact-api',
  configureServer(server) {
    process.env.NEON_DB = loadEnv(server.config.mode, process.cwd(), '').NEON_DB

    server.middlewares.use('/api/contact', async (request, response, next) => {
      if (request.method !== 'POST') {
        next()
        return
      }

      try {
        const chunks = []
        for await (const chunk of request) chunks.push(chunk)
        request.body = JSON.parse(Buffer.concat(chunks).toString())

        response.status = (code) => {
          response.statusCode = code
          return response
        }
        response.json = (payload) => {
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify(payload))
        }

        await contactHandler(request, response)
      } catch {
        response.statusCode = 400
        response.end(JSON.stringify({ error: 'Invalid request body' }))
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localContactApi()],
})
