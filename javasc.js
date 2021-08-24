const texts =document.querySelector('.texts');
window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;//adding 
const recoginition=new window.SpeechRecognition();//new instance for sppech and named it recoginiton
recoginition.interimResults=true;//displaying result in real time if we give false the result will be given after we stop
let p=document.createElement('p');//creating element pparagraph so that whatever we speak is displayed here 
//event listener for listener and the event will be in result or whatever we speak will be stored in result
recoginition.addEventListener('result',(e)=>{
    //each time we spaek it breaks so when have to dispaly we dont want it to 
    //be different line expect when question asked or work assigned
    //so we map each of our word so that it is displayed in one line 
    //console.log(e);
    const text=Array.from(e.results)
       .map(result=>result[0])
       .map(result=>result.transcript)
       .join('');
       p.innerText=text;
       texts.appendChild(p);
       if(e.results[0].isFinal){
           p=document.createElement('p');
       }
       console.log(e);
})
//whenever first ession end it should continue
//whenever we stop speaking itshould  comes to new line so that our function continues to run till when not ended by user .
//for that 
//it auotmatically starts our session again when one session end 
//it is continuing to work
recoginition.addEventListener('end',()=>{
    recoginition.start();
})
recoginition.start();
