function distanceFromHqInBlocks (pickUpLocation){
    const startPoint = 42;
    if (pickUpLocation >= 42) {
        return pickUpLocation - startPoint;
    } else {
        return startPoint - pickUpLocation;
    };
};

function distanceFromHqInFeet (pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation)*264
};

function distanceTravelledInFeet(pickUpLocation,dropOffLocation){
    return Math.abs((dropOffLocation - pickUpLocation)*264)
};

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet (start, destination);
    if (distance <= 400){
          return 0;
      } else if (distance >400 && distance <2000){ 
          return (distance-400) * 0.02;
      } else if (distance >2000 && distance <2500){ 
          return 25;
      } else if (distance >=2500){
          return ('cannot travel that far');
      }
};