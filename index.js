// Code your solution in this file!
const headQ = 42

function distanceFromHqInBlocks(someValue){
    if (headQ < someValue){
        return someValue - headQ;
    }else{
        return headQ - someValue;
    }
  
}


function distanceFromHqInFeet(someValue){
    if (headQ < someValue){
        return ((someValue - headQ) *264);
    }else{
        return ((headQ - someValue)*264);
    }


}


function distanceTravelledInFeet(start,destination){
    if(start < destination){
        return((destination - start)*264);
    }else{
        return((start - destination)*264);
    }

}

function calculatesFarePrice(start,destination){
    let ride = ((start - destination) && (destination - start));
    let newRide = (Math.abs(ride)*264);
   console.log(newRide);
  if (newRide <=400){
  return 0;
} else if(newRide <=2000){
    return((newRide-400)*.02);
} else if( newRide <=2500){
    return 25;
}else{
    return 'cannot travel that far';
}
}


distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34 , 28);

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);