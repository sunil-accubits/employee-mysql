require('dotenv').config();
module.exports={
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect":process.env.DIALECT,
      pool:{
      max:1,              //maximum no of connection in pool
      min:0,              //minimum no of connection in pool
      acquire:30000,      //maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle:10000          //maximum time, in milliseconds, that a connection can be idle before being released
  }
}













/* module.exports ={
    HOST :"localhost",
    USER:"root",
    PASSWORD:"root",
    DATABASE:"testdb",
    DIALECT:"mysql",
    //Pool is Optional, used for Sequelize connection pool configuration
    pool:{
        max:5,              //maximum no of connection in pool
        min:0,              //minimum no of connection in pool
        acquire:30000,      //maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle:10000          //maximum time, in milliseconds, that a connection can be idle before being released
    }

}; */