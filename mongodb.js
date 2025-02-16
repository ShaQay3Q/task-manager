const MongoClient = require("mongodb").MongoClient;
// gonna give access to the neccessary function to connect to the DB to performing CRUD operations
// const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017"; //127.0.0.1 akka localhost => it's beter to use th ip cause localhost slows down the connection
const databaseName = "task-manager"; // It will be generated automatically by MongoDB

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		// this will be called when we connect to the db
		if (error) {
			return console.log("Unable to connect to database!");

			// throw new Error(
			//     "Unable to connect to database"
			// );
		}
		console.log("Connected corerctly!");

		// database refrence
		const db = client.db(databaseName); // pass down the name of DB we wanna manipulate (databaseName)
		// const users = db.collection("users"); // gets: name of the collection

		// users.insertOne({
		// 	// pass down an object
		// 	firstName: "Jone",
		// 	lastName: "Doe",
		// 	email: "jone.doe@mail.com",
		// });

		db.collection("users").insert({
			firstName: "Jone",
			lastName: "Doe",
			email: "jone.doe@mail.com",
		});
	}
);
