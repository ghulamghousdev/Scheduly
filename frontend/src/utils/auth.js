const auth = {
    setAuthToken: function(authToken){
        if(authToken){
            localStorage.setItem("token", authToken);
        }
    },
    getAuthToken: function(authToken){
        return localStorage.getItem("token");
    },
    removeAuthToken: function(authToken){
        if(authToken){
            localStorage.removeItem("token");
        }
    }
}

export default auth;