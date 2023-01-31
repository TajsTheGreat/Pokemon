import { Component } from "@angular/core";

@Component({
    selector: 'terning',
    templateUrl: './terning.component.html'
})

export class TerningComponent{
    userInput: string = 'text';
    rolledValue: Number = 0;
    numberInput: number = 0;
    rolls: any[] = [];
    noRolls: number = 0;

    rulTerning(): void
    {
        this.numberInput = parseInt(this.userInput);
        this.rolledValue = this.getRandomNumber(this.numberInput);
        this.rolls[this.noRolls] = 
        {
            "antalKast": this.noRolls,
            "rulledeVaerdi": this.rolledValue
        }
        this.noRolls++;
    }

    getRandomNumber(max:number): Number
    {
        return Math.floor(Math.random() * max) + 1;
    } 
}