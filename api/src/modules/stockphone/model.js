const db = require("../../config/database");

const findAll = () => {
  return db
    .query("select * from stockphone left join phone on phone_id = phone.id")
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("Error ", err);
      return err;
    });
};

const findOne = (id) => {
  return db
    .execute(
      "select * from stockphone left join phone on phone_id = phone.id where id = ?",
      [id]
    )
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("Error ", err);
      return err;
    });
};

const createPhone = (user, phone, infos) => {
  const { condition, unlocked, accessories } = infos;
  const { userId, location } = user;
  const price = 10; //Calcul fort complexe
  return db
    .execute(
      "insert into stockphone (price, location, date, condition, unlocked, accessories, phone_id, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        price,
        location,
        Date.now(),
        condition,
        unlocked,
        accessories,
        phone.id,
        userId,
      ]
    )
    .then(([data]) => {
      return { id: data.insertId, ...phone };
    })
    .catch((err) => {
      console.error("err", err);
      return err;
    });
};

const removePhone = (id) => {
  return db
    .execute("delete from stockphone where id = ?", [id])
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("Error ", err);
      return err;
    });
};

const modifyPhone = (phone, id) => {
  return db
    .query("update stockphone set ? where id = ?", [phone, id])
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("Error ", err);
      return err;
    });
};

module.exports = { findAll, findOne, createPhone, removePhone, modifyPhone };
