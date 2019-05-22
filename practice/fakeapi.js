const user = {
    authorizationToken: "super secret gold token with beveled edges",
    firstname: "Alfredo",
    lastname: "Linguini"
}


export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(user)
        }, 1000)
    })
}