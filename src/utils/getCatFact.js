const request = require('request')

const url = 'https://cat-fact.herokuapp.com/facts'

const getCatFact = function(callback){
  request({url:url, json:true}, (error, response) => {
    //If there is an error then we will callback the error
    if(error){
      callback('Unable to find to cat facts')
    }else{
      const rand = Math.floor(Math.random() * 210)
      callback(response.body.all[rand].text)
    }
  })
}

module.exports = getCatFact
