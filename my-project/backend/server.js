const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/uploads', express.static('uploads'))

app.use('/api/auth', require('./routes/authRoutes'))

app.use('/api/therapists', require('./routes/therapistRoutes'))

app.use('/api/bookings', require('./routes/bookingRoutes'))

app.use('/api/reviews', require('./routes/reviewRoutes'))

app.use('/api/maps', require('./routes/mapsRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`)

})