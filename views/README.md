
https://ejs.co/#docs

## base

```
<% if (user.email) { %>
  <h1><%= user.email %></h1>
<% } %>
```

## tags
|Tag|Desctiption|
|---|---|
|<%|これは、制御フローに使用されるScriptletタグです。これは何も出力しません|
|<%_ _%>|'Whitespace Slurping'タグ。これにより、その前のすべての空白が削除されます。|
|<%= %>|HTMLエスケープ値を生成します|
|<%- %>|HTMLのエスケープされていない値（データベースでhtmlを生成した場合に便利です）|
|<%# %>|コメントタグ|
|<%%|<%リテラルを出力する|
|%>|終了タグ|
|-%>|改行に続くトリム|
|_%>|その後の空白を削除します|

## include
```
<%- include('partials/navbar.ejs', data) %>
  <h1> Title <h1>
  <p> content </p>
<%- include('partials/footer.ejs', data) %>
```

```
<img id="my_img" src="<%= person.picture %>" alt="">
```