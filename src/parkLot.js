import {parks,park1,park2} from "./mockData";

class ParkLot {
    constructor() {
        this.parks = parks;
        this.park = null;
    }

    parkCar(parkId, car) {
        this.park = this.parks.find(item => item.id === parkId);
        if (this.park.spare <= 0) return "停车场已满";

        this.park.spare--;

        let park = this.park.park.find(item => item.empty);
        park.licenseNumber = car.licenseNumber;
        park.empty = false;
        return park;
    }

}

const parkLot = (() => {
    let instant = null;
    return () => {
        if (instant === null) {
            instant = new ParkLot();
        }
        return instant
    }
})()();

export default parkLot;