
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
|<%|This is a Scriptlet tag, used for control flows. This does not output anything|
|<%_ _%>|'Whitespace Slurping' tag, this removes all whitespaces before it.|
|<%= %>|Produces HTML escaped value|
|<%- %>|HTML unescaped value (useful if you have generated html in database )|
|<%# %>|Comment tag|
|<%%|to output literal <%|
|%>|Ending tag|
|-%>|Trims following new line|
|_%>|Remove white spaces after it|

## include
```
<%- include('partials/navbar.ejs', data) %>
  <h1> Title <h1>
  <p> content </p>
<%- include('partials/footer.ejs', data) %>
```