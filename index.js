require("dotenv").config()
const express = require("express");

const app=express();

const port=4000;

const githubData={
    "login": "jaskaranahuja13",
    "id": 143103871,
    "node_id": "U_kgDOCIeXfw",
    "avatar_url": "https://avatars.githubusercontent.com/u/143103871?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jaskaranahuja13",
    "html_url": "https://github.com/jaskaranahuja13",
    "followers_url": "https://api.github.com/users/jaskaranahuja13/followers",
    "following_url": "https://api.github.com/users/jaskaranahuja13/following{/other_user}",
    "gists_url": "https://api.github.com/users/jaskaranahuja13/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jaskaranahuja13/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jaskaranahuja13/subscriptions",
    "organizations_url": "https://api.github.com/users/jaskaranahuja13/orgs",
    "repos_url": "https://api.github.com/users/jaskaranahuja13/repos",
    "events_url": "https://api.github.com/users/jaskaranahuja13/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jaskaranahuja13/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-24T14:25:58Z",
    "updated_at": "2024-07-25T18:55:05Z"
  }

app.get('/',(req,res)=>{
    res.send('Hello Fucker!mhaw hah mhaw');
})

app.get('/twitter',(req,res)=>{
    res.send("yo bro its twitter");
})

app.get('/github',(req,res)=>{
    res.json(githubData);
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
//nodemon so we dont have to rerun the program again and again
app.get('/youtube',(req,res)=>{
    res.send('<h2>Eat shit buddy</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listing on port ${port}`)
})