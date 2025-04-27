import { detector } from '@pascal-giguere/megalodon'

const URL = process.env.URL as string

detector(URL).then(sns => {
  console.log(sns)
})
