const { Client } = require("pg");

const client = new Client({
  user: "shashi",
  password: "password",
  host: "172.17.0.2",
  port: 5432,
  database: "hehedb",
});

client
  .connect()
  .then((res) => console.log("Connected to PostGres"))
  .then(()=>{
    client.query()
  })
  .catch((err) => console.error(err))
  .finally(()=>client.end());


