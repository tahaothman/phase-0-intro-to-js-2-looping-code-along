// Code your solutions in this file


function writeCards(names, event){
    const arrayOfMessages = [];
    for(let i=0; i<names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        arrayOfMessages.push(message); 
    }
    return arrayOfMessages;
}

function countDown(startNumber){
    let i = startNumber;
    while(i>=0){
        console.log(i);
        i--;
    }
}