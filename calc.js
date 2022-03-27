let screen=document.getElementById('screen1');
screen=document.getElementById('screen1').style.fontWeight="900"
screen=document.getElementById('screen1').style.fontSize="20px"
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // console.log('buttoon text', buttonText);
        if(buttonText=='x'){
            buttonText ='*'
            
            screenValue+=buttonText;
            screen1.value=screenValue;
        }
        else if (buttonText=='='){
            screen1.value=eval(screenValue)
            
        }
        
        else if (buttonText=='DEL'){
            screenValue="";
            screen1.value=screenValue;

        }
        else { 
            screenValue += buttonText;
            screen1.value=screenValue;
        }
    
    })

}