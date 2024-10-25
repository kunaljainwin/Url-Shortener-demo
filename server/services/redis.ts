// ~/services/redisService.ts
import Redis from 'ioredis'

// Create a Redis instance
const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
  password: process.env.REDIS_PASSWORD || undefined,
})

// Create: Set a new key with an expiration time (in seconds)
const createKey = async (key: string, value: string, expireTime?: number) => {
  try {
    if (expireTime) {
      await redis.set(key, value, 'EX', expireTime)
    } else {
      await redis.set(key, value)
    }
  } catch (error) {
    console.error('Redis create key error:', error)
    throw error
  }
}

// Read: Get a value by key
const getKey = async (key: string) => {
  try {
    return await redis.get(key)
  } catch (error) {
    console.error('Redis get key error:', error)
    throw error
  }
}

// Update: Modify an existing key's value
const updateKey = async (key: string, newValue: string, expireTime?: number) => {
  try {
    if (expireTime) {
      await redis.set(key, newValue, 'EX', expireTime)
    } else {
      await redis.set(key, newValue)
    }
  } catch (error) {
    console.error('Redis update key error:', error)
    throw error
  }
}

// Delete: Remove a key
const deleteKey = async (key: string) => {
  try {
    await redis.del(key)
  } catch (error) {
    console.error('Redis delete key error:', error)
    throw error
  }
}

// Export all functions together
export { createKey, getKey, updateKey, deleteKey }
