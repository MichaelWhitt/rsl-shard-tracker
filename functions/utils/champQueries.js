const GET_CHAMPS = `
query {
  allChamps(_size: 1000){
    data{
      _id
      name
      rarity
      affinity
      type
      faction
      race
      owned
      rating
      pullCount
      image
    }
  }
}
    `

    const CREATE_CHAMP = `
    mutation($name: String!, $rarity: String!, $affinity: String!, $type: String!, $faction: String!, $race: String!, $owned: Boolean, $rating: Int, $pullCount: Int, $image: String!) {
        createChamp(data: {
          name: $name,
          rarity: $rarity,
          affinity: $affinity,
          type: $type,
          faction: $faction,
          race: $race,
          owned: $owned,
          rating: $rating,
          pullCount: $pullCount,
          image: $image
        }){
          _id
          name
          rarity
          affinity
          type
          faction
          race
          owned
          rating
          pullCount
          image
        }
      }
    `

    const UPDATE_CHAMP = `
    mutation($id: ID!, $name: String!, $rarity: String!, $affinity: String!, $type: String!, $faction: String!, $race: String!, $owned: Boolean, $rating: Int, $pullCount: Int, $image: $String!) {
        updateChamp(id: $id, data: {name:$name, rarity:$rarity, affinity:$affinity, type:$type, faction:$faction, race:$race, owned:$owned, rating:$rating, pullCount:$pullCount, image: $image}){
            _id
          name
          rarity
          affinity
          type
          faction
          race
          owned
          rating
          pullCount
          image
        }
    }
    `

    const DELETE_CHAMP = `
    mutation($id: ID!){
        deleteChamp(id: $id){
            _id
        }
    }
    `



    module.exports = {
        GET_CHAMPS,
        CREATE_CHAMP,
        UPDATE_CHAMP,
        DELETE_CHAMP
    }