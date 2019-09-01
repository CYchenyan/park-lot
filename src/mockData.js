
export const park1 = [
    {
        id: 1,
        empty: true,
        parkId: 1
    },
    {
        id: 2,
        empty: true,
        parkId: 1
    },
    {
        id: 3,
        empty: false,
        parkId: 1,
        licenseNumber: "川A10000"
    }
];

export const park2 = [
    {
        id: 1,
        empty: false,
        parkId: 2,
        licenseNumber: "川A10000"
    },
    {
        id: 2,
        empty: true,
        parkId: 2,
    },
    {
        id: 3,
        empty: true,
        parkId: 2
    }
];

export const parks = [
    {
        id: 1,
        total: 20,
        spare: 12,
        park: park1
    },
    {
        id: 2,
        total: 25,
        spare: 0,
        park: park2
    }
];

export const mockCar = {
    licenseNumber: "川A10000"
};