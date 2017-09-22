function flying(f, a) {
    if (airborn() === true){
        model.fuel-=f;  
        model.altitude += a;
    }
};