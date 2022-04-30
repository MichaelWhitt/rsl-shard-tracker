const GET_SCORES = `
query {
  allScores(_size: 10000){
    data{
      _id
      user
      score
      time
      email
    }
  }
}
    `

    const CREATE_SCORE = `
    mutation($user: String!, $score: String!, $time: String!, $email: String ) {
        createScore(data: {
          user: $user,
          score: $score,
          time: $time,
          email: $email
        }){
          _id
          user
          score
          time
          email
        }
      }
    `

    const UPDATE_SCORE = `
    mutation($id: ID!, $user: String!, $score: String!, $time: String!, $email: String) {
        updateScore(id: $id, data: {user:$user, score:$score, time:$time, email:$email}){
          _id
          user
          score
          time
          email
        }
    }
    `

    const DELETE_SCORE = `
    mutation($id: ID!){
        deleteScore(id: $id){
            _id
        }
    }
    `



    module.exports = {
        GET_SCORES,
        CREATE_SCORE,
        UPDATE_SCORE,
        DELETE_SCORE
    }