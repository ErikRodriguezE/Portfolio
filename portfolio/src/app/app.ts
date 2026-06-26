import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar'
import { GraphStyle } from './components/graph-style/graph-style';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, GraphStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
