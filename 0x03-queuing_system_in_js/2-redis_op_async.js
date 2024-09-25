import { createClient } from "redis"
import redis from "redis"
import { promisify } from "util"

const client = createClient()
const getAsync = promisify(client.get).bind(client)

client.on("connect", () => {
    console.log("Redis client connected to the server")
})

client.on("error", (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`)
})


function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print)
}

async function displaySchoolValue(schoolName) {
    try {
        const reply = await getAsync(schoolName)
        if (reply === null) {
            console.log(`No value found for ${schoolName}`)
        } else {
            console.log(reply)
        }
    } catch (error) {
        console.error("Error retrieving value")
    }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
