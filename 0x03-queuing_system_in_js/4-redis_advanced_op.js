import redis from "redis"

const client = redis.createClient()

client.on("connect", () => {
    console.log("Redis client connected to the server")
})

client.on("error", (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`)
})


const hashKey = 'HolbertonSchools'
const schools = {
    Portland: 50,
    Seattle: 80,
    NewYork: 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2,
};

for (const [school, value] of Object.entries(schools)) {
    client.hset(hashKey, school, value, redis.print)
}

client.hgetall(hashKey, (err, reply) => {
    if (err) {
        console.log("Error retrieving hash", err)
    } else {
        console.log(reply)
    }
})
