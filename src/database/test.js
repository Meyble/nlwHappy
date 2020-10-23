const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage");
//o asunc serve pra eu poder ultilizar o await
Database.then(async function (db) {
  //inserir dados na tabela
  //com o await eu digo so passa pro proximo await quando terminar esse
  /*await saveOrphanage(db, {
    lat: "-8.2784839",
    lng: "-35.9640272",
    name: "lar das meninas",
    about: "o orfanato é muito legal e divertido",
    description:
      "Preste assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
      "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instruction:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Hórarios de cisitas Das 8h até as 18h",
    open_on_weekends: "1",
  }); 
  */
  // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

  //consultar o orfanato pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages where id="3"')
  // console.log(orphanage)

  //deletar um dado da tabela
  // console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
  // console.log(await db.run('DELETE FROM orphanages WHERE id="5"'))
});
