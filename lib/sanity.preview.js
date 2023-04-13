import {definePreview} from 'next-sanity/preview'
import {config} from './sanity'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}
const {dataset, projectId} = config
export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})