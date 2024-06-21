import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.css'
})
export class SpinningWheelComponent {
 
  outcome:string[]=['prize1','prize2','Try Again','Bonus','Prize3','Prize4']
  currentOutcome:string=''

  spinWheel(){
    const index = Math.floor(Math.random()*this.outcome.length)
    this.currentOutcome=this.outcome[index]
    this.showResults()
  }
  async showResults(){
    for(let i = 0; i<3; i++){
      await this.delay(500)
      console.log('spinning.....') 
    }
    await this.delay(500)
    console.log(`Result: ${this.currentOutcome}`)
    
  }
  delay(ms:number){
    return new Promise(resolve=> setTimeout(resolve,ms))
  }
}
