export const config = {
    STG: {
        host: 'https://gorest.co.in/public/v2',
        token: '',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    PROD: {
        host: 'https://gorest.co.in/public/v2',
        token: '',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    BOOKS_DEV: {
        host: 'localhost:1010',
    },
    BOOKS_STG: {
        host: 'localhost:2020',
    },
    BOOKS_PRD: {
        host: 'localhost:3030',
    }
}

global.executionVariables = {}