import { Config } from "./app/config.js";
import app from "./app/server.js";

app.listen(Config.PORT, (err) => {
  if (err) {
    console.log("Error while initializing server:\n" + err);
    return;
  }

  console.log(`Server Ready: http://localhost:${Config.PORT}/`);
});
