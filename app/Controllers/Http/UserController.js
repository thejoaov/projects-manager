'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password', 'avatar_id'])

    const user = await User.create(data)

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
