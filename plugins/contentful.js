const contentful = require('contentful')
const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_DELIVERY_API
}

const client = contentful.createClient(config)

export default client