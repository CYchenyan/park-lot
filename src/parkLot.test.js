import parkLot from "./parkLot"
import {mockCar, parks} from "./mockData";

describe("park Lot", () => {
    let testParkLot;
    beforeEach(()=>{
        testParkLot = parkLot;
    });

    it("should return '停车场已满' when park spare less than 0", () => {
        const result = testParkLot.parkCar(2, mockCar);
        expect(result).toBe("停车场已满")
    });

    it("should park car in 1park 1space when park car in 1park", () => {
        const result = testParkLot.parkCar(1, mockCar);
        const resultData = {
            id: 1,
            empty: false,
            parkId: 1,
            licenseNumber: "川A10000"
        };
        const park = parks.find(item=>item.id === 1);
        expect(result.toString()).toBe(resultData.toString());
        expect(park.spare).toBe(park.spare--)
    })
});

