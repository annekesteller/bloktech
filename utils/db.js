exports.test = async function (client){
    try { 
      await client.connect()
  
      const database = client.db('userdb')
  
      const collection = database.collection('users')
  
      const doc = {
          name: 'Anneke'
          



        }
  
      // hier gaat een document in - fuctie insertOne (promises)
      await collection.insertOne(doc).then(event => {
        console.log('event', event)
      })
  
    // Error, als de database niet doet
    } catch (err) { 
        console.log(err)
    }
  
  }