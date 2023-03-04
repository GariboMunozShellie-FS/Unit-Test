const validateCardNumber = (number) => {
    regexp = /(^[0-9]{12,16})$/;
        if (regexp.test(number)) {
            let hideNum = [];
                for(let i = 0; i < number.length; i++){
                    if(i < number.length-4){
                        hideNum.push("*");
                    }else{
                        hideNum.push(number[i]);
                    }
                }
        return hideNum.join("");
        
    } else {
        return "Invalid Credit card";
    }
}

module.exports = validateCardNumber