const PigLatin = function(str){
    strArray= str.split("")
    let result
    newString=[]
    let num=0
    let lastCons= 0

    if(strArray[0]=="a"||strArray[0]=="e"||strArray[0]=="i"||strArray[0]=="o"||strArray[0]=="u"){
       strArray.push(["way"]) 

       result = strArray.join("")

    } else{
        for (i=1; i<strArray.length; i++){
            if(strArray[i]=="a"||strArray[i]=="e"||strArray[i]=="i"||strArray[i]=="o"||strArray[i]=="u"){
            
            lastCons = (i)
            break;
            }      
            
        }
        for (i=lastCons; i<strArray.length;i++){
            newString.push(strArray[i])
        }
        for (i=0;i<lastCons;i++){
            newString.push(strArray[i])
        }
        
        newString.push(["ay"])

        result = newString.join("")
    }
    

    

    return result
}

module.exports = PigLatin
