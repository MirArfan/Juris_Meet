import jwt from 'jsonwebtoken'

// Lawyer authentication middleware

const authLawyer = async (req, res, next) => {
    try {
        
        const { ltoken } = req.headers
        if (!ltoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" })

        }
        const token_decode = jwt.verify(ltoken, process.env.JWT_SECRET)
        req.body.lawId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authLawyer