import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1") 
    .setProject("68a9a9b2003e4603a431"); 

const databases = new Databases(client);

const result = await databases.createDocument(
    '68a9abe2002027147359', // databaseId
    '68a9abfe0023a3090fd6', // collectionId
    ID.unique(), // documentId
    {Content:"Omkar",ID:"101",Completed:"True"}, // data
);

console.log(result);
