# Article-API
Api for create articles and comment it

## Setup API
for start API you need write this command
```
$ cd ../Article-API
$ npm install
$ npm run start
```
##HOW TO USE

#### CREATE ARTICLE

POST: http://localhost:3000/articles

InsertDataExample(in body):  
```
{
   "title":"Hello",
   "text":"My first Articles"
}
```

title and text have to be a string.

#### GET ALL ARTICLES

GET: http://localhost:3000/articles

ReturnExample:
```
{
    "data": [
        {
            "id": 12,
            "title": "Privet",
            "text": "My first Articles here",
            "createdDate": "2020-01-25T11:09:36.000Z"
        },
        {
            "id": 13,
            "title": "Privet",
            "text": "My Second Articles here",
            "createdDate": "2020-01-25T11:09:48.000Z"
        }
    ]
}
```

#### GET ARTICLE BY ID

GET: http://localhost:3000/articles/:article_id

ReturnExample:
```
{
    "data": {
        "id": 12,
        "title": "Privet",
        "text": "My first Articles",
        "createdDate": "2020-01-25T11:09:36.000Z"
    }
}
```
#### UPDATE ARTICLE

PATCH: http://localhost:3000/articles/:article_id

UpdateDataExample:
```
{
    "title":"JavaScript Good Practice"
}
```
You can update one or two parameters

ReturnExample:
```
{
    "data": {
        "id": 12,
        "title": "JavaScript Good Practice",
        "text": "My first Articles",
        "createdDate": "2020-01-25T11:09:36.000Z"
    }
}
```

#### DELETE ARTICLE
DELETE: http://localhost:3000/articles/:article_id

#### GET ALL ARTICLES COMMENTS

GET: http://localhost:3000/articles/:article_id/comments

Getting all Article Comments

ReturnExample:

```
{
    "data": [
        {
            "id": 7,
            "authorName": "Max",
            "text": "Hello!!!",
            "article_id": 12,
            "createdDate": "2020-01-25T13:49:21.000Z"
        },
        {
            "id": 8,
            "authorName": "Marta",
            "text": "Wow cool topic",
            "article_id": 12,
            "createdDate": "2020-01-25T13:49:21.000Z"
        }
    ]
}
```
#### CREATE NEW COMMENT

POST: http://localhost:3000/articles/article_id/comments

InsertDataExample(in body):

```
{
	"authorName":"Misha",
	"text":"SO COOL!!!"
}
```

#### GET COMMENT BY ID

GET: http://localhost:3000/comments/comment_id

ReturnExample:

```
{
    "data": {
        "id": 8,
        "authorName": "Marta",
        "text": "Wow cool topic",
        "article_id": 12,
        "createdDate": "2020-01-25T13:49:21.000Z"
    }
}
```
#### UPDATE COMMENT BY ID

PATCH: http://localhost:3000/comments/comment_id

UpdateDataExample:

```
{
	"authorName":"Olia",
	"text":"Heeeey"
}
```
You can update one or two parameters

ReturnExample:

```
{
    "data": {
        "id": 4,
        "authorName": "Sasha",
        "text": "Lol",
        "article_id": 1,
        "createdDate": "2020-01-25T00:32:18.000Z"
    }
}
```
#### DELETE COMMENT BY ID

DELETE: http://localhost:3000/comments/comment_id
