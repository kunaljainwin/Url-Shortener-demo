const mongoose = require('mongoose');
const Url=require('../models/url.model')
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1)
  });
const mongo = {
  getLongURL: async (sHash) => {
    try {
      let data=await Url.findOne({shortUrl:{$regex:sHash}})
      if(data && data._doc && data._doc.originalUrl)
      {
        return data._doc.originalUrl
      }
      return ""
    } catch (error) {
      console.log(error)
      return false
    }
  },
  createRecord: async (sHash,sUrl) => {
    try{
      let url=new Url({shortUrl:sHash,originalUrl:sUrl,dateCreated:Date.now()})
      let result=await url.save()
      console.log('Short URL created:',url)
      return true
    }
    catch
    {
      console.log(error)
      return false;
    }
  }
  
};

module.exports=mongo