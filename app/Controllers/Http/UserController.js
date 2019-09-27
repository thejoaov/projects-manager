'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const data = request.only(['username', 'email', 'password', 'file_id'])
    const adresses = request.input('addresses')

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)

    await user.addresses().createMany(adresses, trx)

    await user.load('file', trx)

    await trx.commit()

    return user
  }

  async show({ auth }) {
    const user = await User.findOrFail(auth.user.id)
    await user.load('file')
    await user.load('projects.tasks')

    return user
  }

  async update({ request, auth }) {}
}

module.exports = UserController
