var jokenumber=0;
let jokes=[
    {
        joke: "I ate a sock yesterday. It was very time-consuming."
    },
    {
        joke:"Whats falls, but never needs a bandage? The rain"
    },
    {
        joke:"I was going to tell you a joke about boxing but I forgot the punch line."
    },
    {
        joke:"Why did the egg hide? It was a little chicken."
    },
    {
        joke:"I wanted to buy some camo pants but couldn't find any."
    }
]
for(let i=0;i<jokes.length;i++)
console.log(jokes[i].joke);
function previous()
{
    if(jokenumber!==0)
    --jokenumber;
    
    document.getElementById("paragraph").innerHTML= jokes[jokenumber].joke;
}
function next()
{
    ++jokenumber;
    if(jokenumber===jokes.length)
    jokenumber=0; 
    document.getElementById("paragraph").innerHTML= jokes[jokenumber].joke;
}

