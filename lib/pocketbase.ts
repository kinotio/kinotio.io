import PocketBase from 'pocketbase'

const pocketbase = new PocketBase(process.env.PB_URL)

type ContactProps = {
  name: string
  email: string
  message: string
}

async function saveContact(data: ContactProps) {
  return await pocketbase.collection('contacts').create(data)
}

export { saveContact }
