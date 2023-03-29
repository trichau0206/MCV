const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jkohn'

    },
    {
        username: 'Tri',
        password: 'tri'
    },
    {
        username: 'Marvick',
        password: 'marvick'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;