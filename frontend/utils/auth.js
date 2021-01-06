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
    },
    isAuthenticated: function(){
        const token = localStorage.getItem("token");
        if(token){
            return true;
        } else {
            return false;
        }
    }
    

}

export default auth;