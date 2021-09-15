let Response = {
    HTTP_CODE: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
    }
};

const ResSuccess = (resInfo) => {
    resInfo.res.status(resInfo.code).json(resInfo.data);
}

const ResError = (error) => {
    resInfo.res.status(error.httpCode).json({
        messsage: error.message,
    });
}

Response.ResSuccess = ResSuccess;
Response.ResError = ResError;

module.exports = Response;