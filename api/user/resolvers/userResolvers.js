const data_users = [

    {
      "id": 2,
      "nome": "Ana Torre",
      "ativo": true,
      "email": "a@a.com",
      "role": 1
    },
    {
      "id": 2,
      "nome": "Gabriel Costa",
      "ativo": true,
      "email": "g@g.com",
      "role": 1
    },
    {
      "id": 3,
      "nome": "Flavia Lins",
      "ativo": true,
      "email": "f@f.com",
      "role": 1
    },
    {
      "id": 4,
      "nome": "Carlos Marques",
      "ativo": true,
      "email": "c@c.com",
      "role": 2
    },
    {
      "id": 5,
      "nome": "Silvia Souza",
      "ativo": true,
      "email": "s@s.com",
      "role": 2
    },
    {
      "id": 6,
      "nome": "Marcia Silva",
      "ativo": true,
      "email": "m@m.com",
      "role": 2
    }
]

const userResolvers = {
    Query:{
        users: () => data_users
    }
}

module.exports = userResolvers