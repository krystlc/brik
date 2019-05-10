import Vue from 'vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const options = {
  renderNode: {
    'embedded-asset-block': node =>
      `<figure class="is-image"><img src="${
        node.data.target.fields.file.url
      }" /></figure>`
  }
}

Vue.prototype.$renderRichText = doc => documentToHtmlString(doc, options)
