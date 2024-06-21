import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningWheelComponent } from "./spinning-wheel/spinning-wheel.component";
import { TalkativeDirective } from './directive/talkative.directive';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipe } from './pipes/placeholder.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, SpinningWheelComponent, TalkativeDirective,FormsModule,PlaceholderPipe]
})
export class AppComponent {
  title = 'Assessment';
  inputValue: string = '';
  placeholderText: string = 'This field is required';
  minLength: number = 5;
}
