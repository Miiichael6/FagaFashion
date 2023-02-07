import "reflect-metadata";
import app from "./app";
import {AppDataSource} from "./config/db"

async function main (){
  try {
    const PORT = process.env.PORT || 4000
    await AppDataSource.initialize()
    console.log("database Connected")
    app.listen(PORT, () => {
      // AppDataSource.
      console.log(`Server listening on Port http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message)
  }
}

main()
