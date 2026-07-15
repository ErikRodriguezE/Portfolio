import { Component, inject } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private translateService = inject(TranslateService);

  onLangToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.translateService.use(checked ? 'es' : 'en');
  }
}
