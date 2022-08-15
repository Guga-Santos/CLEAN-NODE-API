import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<any> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.insertOne(accountData)
    const newAccount = { id: account.insertedId.toHexString(), ...accountData }
    return newAccount
  }
}
