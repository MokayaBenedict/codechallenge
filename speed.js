function speedDetector(speed) {
    
    if (speed <= 70) {
        return ("Ok");
    }   
    
    const points = Math.floor((speed - 70) / 5);   
    
    if (points > 12) {
        return ("License suspended");
    } 
    
    else {
        return ("Points:", points);
        }
}