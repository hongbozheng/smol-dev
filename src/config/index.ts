const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'password',
        database: process.env.DB_NAME || 'mydatabase',
    },
    secret: process.env.SECRET || 'mysecret',
};

export default config;