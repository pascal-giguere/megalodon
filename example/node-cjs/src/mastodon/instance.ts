import generator, { Entity, Response } from '@pascal-giguere/megalodon'

const BASE_URL: string = process.env.MASTODON_URL!

const client = generator('mastodon', BASE_URL)

client.getInstance().then((res: Response<Entity.Instance>) => {
  console.log(res.data)
})
