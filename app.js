var express = require("express");
var app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    var data = {
        items: [
            {name: "リンゴ"},
            {name: "バナナ"},
            {name: "スイカ"}
        ]
    };
    // レンダリングを行う
    res.render("./index.ejs", data);
});

app.listen(3817);
