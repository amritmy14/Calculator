let string=" ";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((item) =>{
    item.addEventListener('click' , (e)=>{
        if (e.target.closest('button').id == 'backspace') {
            string = string.slice(0, -1);  
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == '='){
            try {
                string = eval(string.replace(/x/g, '*').replace(/÷/g, '/'));
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string=" ";
            document.querySelector('input').value = string;
        }
        
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
        }
    })
})