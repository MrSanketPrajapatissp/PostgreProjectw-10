"use strict";
//                       ->                      Search for a user in the database based on their email
/*

import { Client } from 'pg';

// Async function to fetch user data from the database given an email

async function getUser(email: string) {
    const client = new Client({
       connectionString: "postgresql://neondb_owner:npg_DR3IaMUVWG1y@ep-blue-boat-ab8rmeo8-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('user3@example.com').catch(console.error);

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// TO RETRIVE ALL USERS FROM THE DATABASE
const pg_1 = require("pg");
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:npg_DR3IaMUVWG1y@ep-blue-boat-ab8rmeo8-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const query = 'SELECT * FROM users';
            const result = yield client.query(query);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
getUser().catch(console.error);
/*
// Async function to insert data into a table insure way to insert data into the database relation
async function insertData() {
 
    const client = new Client({
       connectionString: "postgresql://neondb_owner:npg_DR3IaMUVWG1y@ep-blue-boat-ab8rmeo8-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
*/
/*
import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  
    const client = new Client({
       connectionString: "postgresql://neondb_owner:npg_DR3IaMUVWG1y@ep-blue-boat-ab8rmeo8-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users IF NOT EXISTS (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username1', 'user1@example.com', 'user_password').catch(console.error);
insertData('username2', 'user2@example.com', 'user_password').catch(console.error);
insertData('username3', 'user3@example.com', 'user_password').catch(console.error);
insertData('username4', 'user4@example.com', 'user_password').catch(console.error);
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);

*/ 
