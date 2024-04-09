interface USER {
    lastName: string,
    email: string,
    pass: string,
    };

export type USERSetType = {
    [key: string]: USER;
}

export const USERs: USERSetType = {
    Luke: {
        lastName: 'Miller',
        email: 'abedcfg@gmail.com',
        pass: 'abcdefg'
    },
    Michael: {
        lastName: 'Diaz',
        email: '123456@gmail.com',
        pass: '123456'
    },
    Briana: {
        lastName: 'Ross',
        email: '654321@gmail.com',
        pass: '654321'
    },
}