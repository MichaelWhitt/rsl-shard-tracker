const GET_CHAMPS = `
        query {
            allChamps{
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
                }
            }
        }
    `

    const CREATE_CHAMP = `
    mutation($name: String!, $rarity: String!, $affinity: String!, $type: String!, $faction: String!, $race: String!, $owned: Boolean, $rating: Int, $pullCount: Int) {
        createChamp(data: {
          name: $name,
          rarity: $rarity,
          affinity: $affinity,
          type: $type,
          faction: $faction,
          race: $race,
          owned: $owned,
          rating: $rating,
          pullCount: $pullCount
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
        }
      }
    `


    module.exports = {
        GET_CHAMPS,
        CREATE_CHAMP
    }