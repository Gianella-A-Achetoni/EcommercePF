import User from '../models/User.js';

const users = [
    {
        username: 'gianella',
        userpassword: '123456',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'ezequiel',
        userpassword: '123456',
        edad: 36,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'jessica',
        userpassword: '123456',
        edad: 30,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'sofi',
        userpassword: '123456',
        edad: 27,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'gianellaachetoni@gmail.com',
        userpassword: 'n4*EDnQ3r+7YAMX',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'gianellaachetoni@gmail.com',
        userpassword: 'n4*EDnQ3r+7YAMX',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'gianellaachetoni@gmail.com',
        userpassword: 'Ga142536475869',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    },
    {
        username: 'gianellaachetoni@gmail.com',
        userpassword: '12345678',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    }
];

const preloadUser = async () => {
    try {
        await Promise.all(
            users.map((u) =>
                User.findOrCreate({
                    where: { username: u.username },
                    defaults: {
                        userpassword: u.userpassword,
                        edad: u.edad,
                        useremail: u.useremail
                    }
                })
          )
        );
    } catch (error) {
        throw new Error(error);
    }
}

export default preloadUser;