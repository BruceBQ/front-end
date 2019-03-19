function getToken(){
    try {
        const access_token = JSON.parse(localStorage.getItem('user')).access_token
        return access_token
    } catch (error) {
        
    }
}
const access_token = getToken()

export default access_token 
