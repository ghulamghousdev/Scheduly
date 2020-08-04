const auth = {
    setAuthToken: function(authToken){
        if(authToken){
            localStorage.setItem("token", authToken);
        }
    },
    getAuthToken: function(authToken){
        return localStorage.getItem("token");
    }
    
}

export default auth;