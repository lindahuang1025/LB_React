function numberFormat(num: number){
    if(num>0){

       return {
            isPositive: true,
            number: num
        }
    }else{
        return {
            isPositive: false,
            number: Math.abs(num)
        }
    }
}

export default numberFormat;