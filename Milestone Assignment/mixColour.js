function mixTwoColors(color1, color2) {
    let resultantColor;

    switch(color1) {
        case 'red' :
            switch(color2) {
                case 'blue' :
                resultantColor = "purple";
                break;
                
                case 'yellow' : 
                resultantColor = "orange";
                break;

                default : 
                resultantColor = "Invalid color combination";
            }
        break;
        case 'blue' :
            switch(color2) {
                case 'yellow' :
                resultantColor = "green";
                break;

                case 'red' : 
                resultantColor = "purple";
                break;

                default : 
                resultantColor = "Invalid color combination";
            }
        break; 
        case 'yellow':
            switch (color2) {
              case 'red':
                resultantColor = 'orange';
                break;
              case 'blue':
                resultantColor = 'green';
                break;
              default:
                resultantColor = 'Invalid color combination.';
            }
        default:
        resultantColor = 'Invalid color combination.';
    }
    console.log("Resulting Color : ", resultantColor);
}

mixTwoColors('red', 'yellow');