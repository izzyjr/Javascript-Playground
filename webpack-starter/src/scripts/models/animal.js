// Creating a Module
export class Animal {

    constructor(name) {
        this.name = name;
    }
    makeNoise(noise) {
        return `Noise: ${noise}`;
    }
}
