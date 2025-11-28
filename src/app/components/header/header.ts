import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public collapseIfMobile() {
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (!toggler) return;

    const isMobile = window.getComputedStyle(toggler).display !== 'none';
    if (!isMobile) return;

    const menu = document.getElementById('navbarSupportedContent');
    if (!menu) return;

    menu.classList.remove('show');
  }
}
