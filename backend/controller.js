const mongo = require("./common/mongo-db");
const redis = require("./common/redis-db");

function generate7DigitHash() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let hash = "";
  for (let i = 0; i < 7; i++) {
    hash += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return hash;
}
const controller = {
  shortenURL: async (sUrl) => {
    const sHash = generate7DigitHash();
    let retryLimit=3
    let result=null
    while(retryLimit--&&!result)
    {
      result = await mongo.createRecord(sHash, sUrl);
    }
    if(result)
    {
      return sHash
    }
    return false;
  },
  getLongURL: async (skey) => {
    let sUrl = await redis.getLongURL(skey);
    if (!sUrl) {
      console.log("redis : not found");
      const result = await mongo.getLongURL(skey);
      if (result) {
        console.log("postgres : found", result);
        sUrl = result
        // caching in redis
        redis.createKeyValue(skey, sUrl)// async
        .then(()=>{
          console.log("redis : cached", skey);
        })
        
      } else {
        console.log("postgres : not found");
      }
    } else {
      console.log("redis : found");
    }

    return sUrl;
  },
};
module.exports = controller