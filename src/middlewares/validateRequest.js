
import sendResponse from "../helper/sendResponse.js"

export const validateRequest = (validateSchema) => (req, res, next) => {
    // validate request using schema define in register route in auth.router.js
    const { error } = validateSchema.validate(req.body)
    
    if (error) return sendResponse(res, 401, true, error.message, null)
    next()
}


