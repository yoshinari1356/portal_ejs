var express = require("express");
var app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// 公開フォルダ指定
app.use(express.static('public'));

app.get("/", function (req, res) {
    var data = {
        title: "welcome",
        subtitle: "climbchowder",
        description: "フリーランスプログラマー＆デザイナーをしています",
        logo_url: "/images/icon_128_128.png",
        menus: [
            { title: "Profile" },
            { title: "Skill" },
            { title: "Blog" },
            { title: "other" },
        ],
        skills: [
            { category: "design", name: "figma" },
            { category: "front", name: "html5" },
            { category: "front", name: "javascript" },
            { category: "front", name: "es6" },
            { category: "back",  name: "ruby on rails" },
            { category: "front", name: "java" },
            { category: "front", name: "nuxt" },
            { category: "front", name: "vue" },
            { category: "front", name: "ionic" },
            { category: "front", name: "vue" },
            { category: "front", name: "angular" },
            { category: "infra", name: "aws" },
            { category: "infra", name: "heroku" },
            { category: "common", name: "github" },
        ]
    };
    // レンダリングを行う
    res.render("./index.ejs", data);
});

app.listen(3817);
