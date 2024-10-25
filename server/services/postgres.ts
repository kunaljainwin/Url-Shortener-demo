// ~/services/database.ts
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'your_database',
})

// Create: Insert a new record into the table
const createRecord = async (tableName: string, values: any) => {
  try {
    const fields = Object.keys(values).join(', ')
    const placeholders = Object.keys(values).map((_, i) => `$${i + 1}`).join(', ')
    const query = `INSERT INTO ${tableName} (${fields}) VALUES (${placeholders}) RETURNING *`
    const result = await pool.query(query, Object.values(values))
    return result.rows[0]
  } catch (error) {
    console.error('Database insert error:', error)
    throw error
  }
}

// Read: Fetch all records from the table
const getAllRecords = async (tableName: string) => {
  try {
    const result = await pool.query(`SELECT * FROM ${tableName}`)
    return result.rows
  } catch (error) {
    console.error('Database fetch error:', error)
    throw error
  }
}

// Read: Fetch a single record by ID
const getRecordById = async (tableName: string, id: number) => {
  try {
    const result = await pool.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
    return result.rows[0]
  } catch (error) {
    console.error('Database fetch by ID error:', error)
    throw error
  }
}

// Update: Modify a record by ID
const updateRecord = async (tableName: string, id: number, values: any) => {
  try {
    const updates = Object.keys(values).map((key, i) => `${key} = $${i + 1}`).join(', ')
    const query = `UPDATE ${tableName} SET ${updates} WHERE id = $${Object.keys(values).length + 1} RETURNING *`
    const result = await pool.query(query, [...Object.values(values), id])
    return result.rows[0]
  } catch (error) {
    console.error('Database update error:', error)
    throw error
  }
}

// Delete: Remove a record by ID
const deleteRecord = async (tableName: string, id: number) => {
  try {
    const query = `DELETE FROM ${tableName} WHERE id = $1 RETURNING *`
    const result = await pool.query(query, [id])
    return result.rows[0]
  } catch (error) {
    console.error('Database delete error:', error)
    throw error
  }
}

// Export all functions together
export { createRecord, getAllRecords, getRecordById, updateRecord, deleteRecord }
