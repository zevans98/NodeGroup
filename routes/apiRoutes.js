var tableData = require("../data/tableData");
var waitingData = require("../data/waitingListData");

module.exports = function(app){
    app.get("/api/tables",function(req, res){
        res.json(tableData);
    } );

    app.get("/api/waitlist",function(req,res){
        res.json(waitingData);
    });

    app.post("/api/tables",function(req,res){
        if (tableData.length < 5){
            tableData.push(req.body);
            res.json(true);
        }
        else{
            waitingData.push(req.body);
            res.json(false)
        }
    });
};