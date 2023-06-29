const db = require('../../config/database')

const findAll = () => {
    return db
        .query('select * from user')
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}

const findByMail = (mail) => {
    return db
        .query("select * from user where email = ?", [mail])
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
            return err;
        })
}

const modifyOneUser = (user, userId) => {
    return db
        .query('update user set ? where id = ?', [user, userId])
        .then(([result])=>{
            return result
        })
        .catch((err)=>{
            console.error('err', err)
        })
}

const findOneUser = (id) => {
    return db
        .query('select * from user where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}


const addUser = (user) => {
    const { firstname , lastname, email, location, password} = user
    return db 
        .query("insert into user (firstname , lastname, email, location, password ) values (?, ?, ?, ?, ?)",
        [firstname , lastname, email, location, password])
        .then(([data]) => {
            return { id: data.insertId, ...user}
        }).catch((err) => {
        console.error(err)
            })
       
}


const removeUser = (id) => {
    return db
        .execute("delete from user Where id = ? ",[id])
        .then(([data]) => data )
        .catch((err) => {
        console.error(err)
            })
}

module.exports = { findAll, findOneUser, addUser,removeUser, modifyOneUser, findByMail}
