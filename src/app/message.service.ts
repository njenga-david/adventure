import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages:string[]=[
    'Hello Developer Njenga!',
    'Coding is enjoyable!!',
    'Welcome to Teach2Give..',
    'coding made simple',
    'Have a great time..'

  ]

  getRandomMessage():string{
    return this.messages[Math.floor(Math.random()* this.messages.length)]
  }
  
}
