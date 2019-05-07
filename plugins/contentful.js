const contentful = require('contentful')

console.log('about to poop out', process.env.NODE_ENV, process.env)
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CD_ACCESS_TOKEN
}

const client = contentful.createClient(config)
console.log(client)

export default client
