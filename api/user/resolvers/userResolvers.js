const data_users = require('../../data/dados.json').users

const userResolvers = {
    Query:{
        users: () => data_users,
        user: (id) => data_users[id]
    }
}

module.exports = userResolvers