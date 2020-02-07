export class DeviceService {
    devices = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'on'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'on'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'off'
        }
    ]

    getDeviceId(id: number) {
        const device = this.devices.find((deviceObj) => {
            return deviceObj.id === id;
        });
        return device;
    }

    switchOnAll() {
        for(let device of this.devices) {
            device.status = 'on';
        }
    }

    switchOffAll() {
        for(let device of this.devices) {
            device.status = 'off';
        }
    }

    switchOnOne(index: number) {
        this.devices[index].status = 'on';
    }

    switchOffOne(index: number) {
        this.devices[index].status = 'off';
    }
}