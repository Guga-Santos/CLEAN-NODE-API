import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any, data: any): any {
    const result = { id: collection.insertedId.toHexString(), ...data }
    const { id, name, email, password } = result

    return {
      id,
      name,
      email,
      password
    }
  }
}
