const express = require('express')
const app= express()

app.listen(3000,()=>{
    console.log('online on port 3000')
});

app.get('/greeting', (request,response)=>{
response.status(200).send("Hello, stranger")
})

app.get('/greeting/:name', (request,response)=>{
    const{name}= request.params
    const answer= `Hello,${name}`
    response.status(200).send(answer)
})

app.get('/tip/:total/:tipPercentage', (request,response)=>{
    const{total, tipPercentage}= request.params
    const answer= Number(total)*Number(tipPercentage)/100
    response.status(200).send(answer)
})

const answers=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (request,response)=>{
    const randomIndex= Math.floor(Math.random()*answers.length)
    const answer= answers[randomIndex] 
    response.status(200).send(`<h1>${answer}</h1>`)
})

