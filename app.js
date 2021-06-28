var express = require("express");
var app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// 公開フォルダ指定
app.use(express.static('public'));

app.get("/", function (req, res) {
    var data = {
        title: "climbchowder",
        subtitle: "design and coding",
        description: "description",
        menus: [
            { title: "Product" },
            { title: "Features" },
            { title: "Marketplace" },
            { title: "Company" },
        ],
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
