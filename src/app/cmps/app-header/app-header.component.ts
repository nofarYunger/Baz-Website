import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @ViewChild('btn') menu: ElementRef<HTMLInputElement>;
  @ViewChild('header') header: ElementRef<HTMLInputElement>;
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
    console.log(this.menu);
    this.menu.nativeElement.classList.toggle('opened')
    if (this.menu.nativeElement.classList.contains('opened')) {
      this.menu.nativeElement.setAttribute('aria-expanded', 'true')
    } else {
      this.menu.nativeElement.setAttribute('aria-expanded', 'false')

    }
    this.header.nativeElement.classList.toggle('open-menu-nav')
    // if (!this.header.nativeElement.classList.contains('colored-nav')) {
    //   this.header.nativeElement.classList.replace('transparent-nav','colored-nav')
    // }

  }
}