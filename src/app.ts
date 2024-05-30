/*
* File: app.ts
* Author: Szamosfalvi Szonja
* Copyright: 2024, Szamosfalvi Szonja
* Group: Szoft I-1-N
* Date: 2024-05-30
* Github: https://github.com/szonia/
* Licenc: GNU GPL
*/




class Ellipszoid {
    axisAInput?: HTMLInputElement | null; 
    axisBInput?: HTMLInputElement | null;
    axisCInput?: HTMLInputElement | null;
    volumeInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHTML();
        this.handleEvent();
    }

    bindHTML() {
        this.axisAInput= document.querySelector("#axisA");
        this.axisBInput = document.querySelector("#axisB");
        this.axisCInput = document.querySelector("#axisC");
        this.volumeInput = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
        this.startCalc();
        });
    }

    startCalc() {
        const axisA = Number(this.axisAInput?.value);
        const axisB = Number(this.axisBInput?.value);
        const axisC = Number(this.axisCInput?.value);
        const volume = this.calcVolume(axisA, axisB, axisC);
        this.rederResult(volume)
    }


    calcVolume(axisA: number, axisB:number, axisC: number):number {
        const rad = (4/3) * Math.PI * axisA * axisB * axisC;
        return volume; 
    }

    rederResult(volume: number) {
        if(this.volumeInput) {
        this.volumeInput.value = String(volume);
        }
        new Ellipszoid();
    }
        
}
    

