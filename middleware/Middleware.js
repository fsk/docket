import express from "express";

const handlingError = (error, req, res, next) => {
    console.log(`in the index : ${error}`);
    res.json({
        statusCode: error.statusCode,
        message: error.message,
        errorTime: new Date()
    })
}

export default {
    handlingError
};