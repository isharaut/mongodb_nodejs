const express = require("express");
const airbnbModel = require("./models");
const app = express();

app.post("/addInfo", async(request, response) => {
    const airbnbInfo = new airbnbModel(request.body);

    try {
        await airbnbInfo.save();
        response.send(airbnbInfo);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/airbnbInfo", async(request, response) => {
    const airbnbInfo = await airbnbModel.find({});

    try {
        response.send(airbnbInfo);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;