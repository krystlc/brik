import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'
require('dotenv').config()

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
}

const client = createClient(config)

const types = ['page', 'blogPost', 'prototype']

export default function getContent() {
  this.nuxt.hook('generate:before', async generator => {
    // This will be called before Nuxt generates your pages
    console.log('> Starting import...')
    for (const type of types) {
      console.log('> Getting content for', type)
      const entries = await client.getEntries({
        content_type: type,
        include: 3
      })
      if (entries.total > 0) {
        fs.writeFileSync(
          path.join(__dirname, '..', 'static/data', `${type}.json`),
          JSON.stringify(entries.items)
        )
        console.log('> Content gotten and written for', type)
      }
    }
    return true
  })
}
