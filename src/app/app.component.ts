import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final';
}

//chamar loader
window.addEventListener('load', (event) => {

  setTimeout(function() {
    document.getElementById("loading").style.display  = "none";
  }, 0);

});



