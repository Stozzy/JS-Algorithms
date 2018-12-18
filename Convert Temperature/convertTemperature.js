function convertTemperature(temp) {
    const convertToCelcius= (temp * (9/5) + 32);
    
    return convertToCelcius;

}

console.log(convertTemperature(0))