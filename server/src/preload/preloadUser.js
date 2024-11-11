import User from '../models/User.js';

const users = [
    {
        username: 'gianella',
        userpassword: '123456',
        edad: 19,
        useremail: 'gianellaachetoni@gmail.com'
    },
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