const axios = require('axios')

exports.searchPlace =
async(req,res)=>{

  try{

    const {query} = req.query

    const url = `
    https://maps.googleapis.com/maps/api/place/textsearch/json
    ?query=${query}
    &key=${process.env.GOOGLE_MAPS_API_KEY}
    `

    const response =
    await axios.get(url)

    res.json(response.data)

  }catch(error){

    res.status(500).json(error)

  }

}