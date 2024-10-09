// local storage 

// how we can set something into the local storage
//localStorage.setItem("token", "hello")

// getting something from the local storage
//localStorage.setItem("token")

// localStorage.getitem("token")


// remove value in the localstorage
//localStorage.removeItem("token")

// clear our local storage
//localStorage.clear()

const user = {
    id: 1,
    theme: "dark",
};

//JSON.stringify
//Javascript object notation
localStorage.setItem("user", JSON.stringify(user))
// JSON.parse
localStorage.getItem("user")
JSON.parse(localStorage.getItem("user"));