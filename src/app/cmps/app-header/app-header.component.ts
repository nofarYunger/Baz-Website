import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @ViewChild('btn') menu: ElementRef<HTMLInputElement>;
  @ViewChild('header') header: ElementRef<HTMLInputElement>;
 
 
  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() === '') {
        this.route = 'Home';
      } else {
        this.route = location.path()
      }
      console.log(this.route);
      
    });

  }

  public navBgc: String = 'transarent-nav'
  public isMenuOpen: boolean = false
  public route: string = "";

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
  }


}