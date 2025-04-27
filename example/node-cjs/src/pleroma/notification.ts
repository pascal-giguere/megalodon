import generator, { NotificationType } from '@pascal-giguere/megalodon'

declare var process: {
  env: {
    PLEROMA_ACCESS_TOKEN: string
  }
}

const BASE_URL: string = 'https://pleroma.io'

const access_token: string = process.env.PLEROMA_ACCESS_TOKEN

const client = generator('pleroma', BASE_URL, access_token)

client.getNotifications({ exclude_types: [NotificationType.Reblog] }).then(res => console.log(res.data))
