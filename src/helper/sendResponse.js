
const sendResponse = (res,statusCode,error,message,data) => {
    res.status(statusCode).json({
      error,message,data
  })
}

export default sendResponse
