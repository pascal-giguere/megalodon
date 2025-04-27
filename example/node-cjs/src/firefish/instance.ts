import generator, { Entity, Response } from '@pascal-giguere/megalodon'

const BASE_URL = process.env.FIREFISH_URL!

const client = generator('firefish', BASE_URL)

client
  .getInstance()
  .then((res: Response<Entity.Instance>) => {
    console.log(res.data)
  })
  .catch(err => console.error(err))
