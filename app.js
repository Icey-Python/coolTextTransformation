var text = document.querySelector('h2');
text.onmouseover=(e)=>{
    //letters to iterate through
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    let transformationInterval = setInterval(()=>{
        //split the text,cycle through the text and assign new letter for each
        e.target.textContent = e.target.textContent.split("")
        .map((letter,index) =>{
            //if index is less than the iterations return the original
            if(index < iteration){
                return e.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() *26)]
        })
        .join("");
        //set iteration to the length of the text
        if(iteration >= e.target.dataset.value.length){
            clearInterval(transformationInterval)
        }
        iteration+=1/3;
    },30)
}