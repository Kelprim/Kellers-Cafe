import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  faFacebook= faFacebook;
  @ViewChild('navBurger') navBurger: ElementRef;
    @ViewChild('navMenu') navMenu: ElementRef;
    @ViewChild('navBar') navBar: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop  ||     
    document.documentElement.scrollTop ) {

     this.navBar.nativeElement.classList.add('scrolled')
    }else{
  
      this.navBar.nativeElement.classList.remove('scrolled');
    }
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
}

}


