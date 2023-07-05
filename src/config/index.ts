const config = {
    port: process.env.PORT || 3000,
    db: process.env.DB || 'mongodb://localhost:27017/mydb',
};

export default config;