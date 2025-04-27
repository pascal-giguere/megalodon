import generator, { Entity, Response } from '@pascal-giguere/megalodon'

const BASE_URL: string = process.env.GOTOSOCIAL_URL!

const client = generator('gotosocial', BASE_URL)

client.getInstance().then((res: Response<Entity.Instance>) => {
  console.log(res.data)
})
