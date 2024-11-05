class ParkingLot {
    
    constructor(slots){
        this.slots=slots;
    }
    
    park(carid){
        
    }
    
    getSlots(){
        return this.slots.map(val => val>0 ?  val : null);
    }

    remove(carid){
        this
    }
    
}


