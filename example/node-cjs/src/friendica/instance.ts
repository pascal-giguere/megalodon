import generator, { Entity, Response } from '@pascal-giguere/megalodon'

const BASE_URL = process.env.FRIENDICA_URL!

const client = generator('friendica', BASE_URL)

client
  .getInstance()
  .then((res: Response<Entity.Instance>) => {
    console.log(res.data)
  })
  .catch(err => console.error(err))
