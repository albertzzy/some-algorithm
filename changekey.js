/* function changeKey(obj){
    if(!obj){

        return;
    }

    return innerChange(obj);

    function innerChange(obj){

       Object.keys(obj).forEach(key => {

            let keyArr = key.match(/([a-zA-Z]+)_([a-zA-Z]+)/);
            
            let keyChange = keyArr[1].toLowerCase() + keyArr[2].toUpperCase();

            obj[keyChange] = obj[key];


            delete obj[key];
            
            if(Object.prototype.toString.call(obj[keyChange]) === '[object Object]' && obj[keyChange]!==null){
                
                innerChange(obj[keyChange]);
                
            }
        })

        return obj;

    }

} */


function changeKey(obj){
    if(!obj){

        return;
    }

    let objStr = JSON.stringify(obj);
    let res;
    let regg = /([a-zA-Z]+)_([a-zA-Z]+)/g;
    let reg = /([a-zA-Z]+)_([a-zA-Z]+)/;

    while((res = regg.exec(objStr))!== null){

        objStr = objStr.replace(reg,res[1].toLowerCase()+''+res[2].toUpperCase());

    }
    
    return JSON.parse(objStr);
}


let a = {n_e:'ne',a_b:{c_d:{e_g:'shit'}}};

console.log(changeKey(a));