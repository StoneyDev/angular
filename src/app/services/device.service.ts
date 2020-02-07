export class DeviceService {
    devices = [
        {
          name: 'Machine à laver',
          status: 'on'
        },
        {
          name: 'Frigo',
          status: 'on'
        },
        {
          name: 'Ordinateur',
          status: 'off'
        }
    ]

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