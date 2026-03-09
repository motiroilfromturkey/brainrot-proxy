const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/brainrot", async (req,res)=>{
  const r = await fetch("https://www.reddit.com/search.json?q=italian+brainrot&limit=50");
  const data = await r.json();

  const posts = data.data.children.map(p=>({
    title:p.data.title,
    image:p.data.thumbnail,
    url:"https://reddit.com"+p.data.permalink
  }));

  res.json(posts);
});

app.listen(3000,()=>console.log("running"));
