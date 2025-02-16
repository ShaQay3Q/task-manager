const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017"; //127.0.0.1 akka localhost => it's beter to use th ip cause localhost slows down the connection
const client = new MongoClient(connectionURL);
const databaseName = "task-manager"; // It will be generated automatically by MongoDB

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log("Connected successfully to server");
	const db = client.db(databaseName);
	const usersCollection = db.collection("users");
	// console.log(typeof usersCollection);
	// const collection = db.collection("documents");

	const insertResult = await usersCollection.insertOne({ a: 1, b: 2, c: 3 });
	console.log("Inserted documents =>", insertResult);
	// the following code examples can be pasted here...

	return "done.";
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());

// MongoClient.connect(
// 	connectionURL,
// 	{ useNewUrlParser: true },
// 	(error, client) => {
// 		// this will be called when we connect to the db
// 		if (error) {
// 			return console.log("Unable to connect to database!");

// 			// throw new Error(
// 			//     "Unable to connect to database"
// 			// );
// 		}
// 		console.log("Connected corerctly!");

// 		// database refrence
// 		const db = client.db(databaseName); // pass down the name of DB we wanna manipulate (databaseName)
// 		// const users = db.collection("users"); // gets: name of the collection

// 		// users.insertOne({
// 		// 	// pass down an object
// 		// 	firstName: "Jone",
// 		// 	lastName: "Doe",
// 		// 	email: "jone.doe@mail.com",
// 		// });

// 		db.collection("users").insert({
// 			firstName: "Jone",
// 			lastName: "Doe",
// 			email: "jone.doe@mail.com",
// 		});
// 	}
// );
