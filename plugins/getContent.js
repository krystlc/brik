import { createClient } from '@/plugins/contentful'

const client = createClient()

export default ({ app }, inject) => {
  inject('getContent', opt => {
    return getContent(opt)
  })
}

async function getContent(opt) {
  try {
    const res = await client.getEntries(opt)
    return res
  } catch (err) {
    console.log(err)
  }
}
