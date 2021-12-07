function post(title, body, author, comment, views,isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comment = comment;
    this.isLive = isLive;
}

const name = new post(
"ahihi",
"anh Hoàng đzzz",
"abc", 
[ 
    {author: 'anh Huân dzzz', body: "lewlew"}, 
    {author: 'anh Huân dzzz', body: "lewlew"} 
],
100, 
true);
console.log(name);