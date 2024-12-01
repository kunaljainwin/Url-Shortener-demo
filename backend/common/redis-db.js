const ioredis = require("ioredis");

// Create a Redis instance
const redis = new ioredis.Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});
redis.on("connect", (data) => {
  console.log("Redis connected successfully");
});
redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});
const redisDB = {
  // Create: Set a new key
  createKeyValue: async (key, value) => {
    try {
      await redis.set(key, value);
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  },
  // Read: Get a value by key
  getKeyValue: async (key) => {
    try {
      let data = await redis.get(key);
      return data;
    } catch (error) {
      console.log(error)
      return false;
    }
  },
  getLongURL:async (sHash)=>{
    const data= await redisDB.getKeyValue(sHash)
    if(data)
    {
      return data;
    }
    return ""
  }
};

module.exports = redisDB;
