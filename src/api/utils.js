function getToken() {
  try {
    const access_token = JSON.parse(localStorage.getItem('user')).access_token
    return access_token
  } catch (error) {}
}
const access_token = getToken()

function getUserId() {
  try {
    const userId = JSON.parse(localStorage.getItem("USER")).id
    return userId
  } catch (error) {
    
  }
}

const userId = getUserId()

export {
  access_token, userId
}

