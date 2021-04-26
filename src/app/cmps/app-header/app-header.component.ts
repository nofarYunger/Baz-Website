import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @ViewChild('btn') menu: ElementRef<HTMLInputElement>;
  constructor() { }
  navBgc: String = 'transparent-nav'
  isMenuOpen: boolean = false

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.navBgc = 'colored-nav'
      } else {
        this.navBgc = 'transparent-nav'
      }
    })
  }
  toggleMenu() {
    const lastState = this.isMenuOpen
    this.isMenuOpen = !lastState

    let btn = document.querySelector('.menu')
    // btn.classList.toggle('opened');
    // btn.setAttribute('aria-expanded', btn.classList.contains('opened'))


  }


}
