import { Component, ElementRef, HostListener, Input, Output, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CelebritiesService } from 'src/app/services/celebrities.service';
import { Subject, Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('appearInOut', [
      state('in', style({
        'visibility': 'visible',
        'opacity': '1',
        'transform': 'translateY(0px)'
      })),
      state('out', style({
        'visibility': 'hidden',
        'opacity': '0',
        'transform': 'translateY(-60px)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('appearUpDown', [
      state('up', style({
        'transform': 'translateY(0px)',
        'opacity': '1'
      })),
      state('down', style({
        'transform': 'translateY(-160px)',
        'opacity': '0'
      })),
      transition('up => down', animate('400ms ease-in-out')),
      transition('down => up', animate('400ms ease-in-out'))
    ]),
  ]

  // animations: [
  //   trigger('appearInOut', [
  //     state('in', style({
  //       'height': '100vh',
  //       'margin-top': '1rem'
  //     })),
  //     state('out', style({
  //       'height': '0',
  //       'margin-top': '1rem'
  //     })),
  //     transition('in => out', animate('500ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ]),
  // ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOpen: boolean = false;
  menuBtnClick: boolean = false;
  searchBtnClick: boolean = false;
  isActiveClass: boolean = false;
  isToggleMenu: boolean = false;
  isToggleMenuIcon: boolean = true;
  isDropDownToggle: boolean = false;
  isDarkBackground: boolean = true;
  borderColor: string = '#D88408'
  isLoading: boolean = false;
  subscription: Subscription
  animationMobileHeaderState = 'in';
  isActiveCategoryComponent: boolean = false;
  animationState = 'out';
  animationMenuState = "down"
  @Input() isInput: boolean = true;
  @Output() callHomeScrollMethod = new Subject<any>();

  onLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }
  constructor(
    private celebritiesService: CelebritiesService,
    private router: Router,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.isToggleMenu = false;
        this.animationMenuState = 'down'
        this.namebutton?.nativeElement.classList.remove('bi-x');
        this.namebutton?.nativeElement.classList.add('bi-list')
      }
      else {
        this.menuBtnClick = false;
      }

      if (!this.searchBtnClick) {
        this.searchText = '';
      }
      else {
        this.searchBtnClick = false;
      }
    });
    this.subscription = this.celebritiesService.getActiveClass.subscribe((isActiveClass) => {
      this.isActiveCategoryComponent = isActiveClass ? isActiveClass : false;
    })
  }
  toggleMenu() {
    this.isToggleMenu = !this.isToggleMenu;
    this.animationMenuState = this.animationMenuState=='down'?'up': 'down'
    if (this.isToggleMenu) {
      this.namebutton.nativeElement.classList.remove('bi-list');
      this.namebutton.nativeElement.classList.add('bi-x');
    }
    else {
      this.namebutton.nativeElement.classList.remove('bi-x');
      this.namebutton.nativeElement.classList.add('bi-list');
    }
  }
  preventCloseOnClick() {
    this.menuBtnClick = true;
  }

  preventCloseSearchOnClick() {
    this.searchBtnClick = true;
  }

  celebrities: any;
  searchText: string;
  p: number = 1;
  itemsPerPage: number = 4;
  isSticky: boolean = false;
  isStickySearchBar: boolean = true;
  @ViewChild('search') searchElement: ElementRef;
  @ViewChild('search1') searchElement1: ElementRef;
  @ViewChild('namebutton', { read: ElementRef, static: false }) namebutton: ElementRef;
  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    if (!this.isStickySearchBar) {
      this.isSticky = window.pageYOffset >= 100;
    }
    if (!this.isSticky) {
      this.isStickySearchBar = window.pageYOffset <= 100;
    }
    if (this.searchText && this.isStickySearchBar) {
      setTimeout(() => { // this will make the execution after the above boolean has changed
        this.searchElement1.nativeElement.focus();
      }, 0)
    }
  }


  ngOnInit(): void {
    this.celebrities = this.celebritiesService.celebrities;

    setTimeout(() => {
      this.animationState = 'in';
    }, 200);
  }

  categoryCelebrity: any = [];

  public onGetCategory(event: any) {
    this.selectedCategory = '';
    this.isDropDownToggle = false;
    this.isToggleMenu = false;
    this.namebutton.nativeElement.classList.remove('bi-x');
    this.namebutton.nativeElement.classList.add('bi-list');
    this.animationMenuState = 'down'
    this.categoryCelebrity = [];
    this.celebritiesService.celebrities.map((celebrity: any) => {
      celebrity.category.map((cat: any) => {
        if (cat.toLowerCase() == event.target.value.toLowerCase()) {
          // this.viewByCategoryComonent.celebrities = [];
          this.categoryCelebrity.push(celebrity);
          // this.viewByCategoryComonent.celebrities = this.categoryCelebrity;
          // this.viewByCategoryComonent.category = event.target.value.toUpperCase();
          this.celebritiesService.getSelectedCategories.next(this.categoryCelebrity)
          this.router.navigate(['category/view']);
        }
      })
    })
    if (event.target.value.toLowerCase() == "all") {
      // this.viewByCategoryComonent.celebrities = [];
      this.categoryCelebrity = this.celebritiesService.getCelebrities();
      // this.viewByCategoryComonent.celebrities = this.categoryCelebrity;
      // this.viewByCategoryComonent.category = event.target.value.toUpperCase();
      this.celebritiesService.getSelectedCategories.next(this.categoryCelebrity)
    }
    // if (this.categoryCelebrity.length <= 0) {
    //   this.viewByCategoryComonent.celebrities = [];
    //   this.activatedRoute.params.subscribe((param: Params) => {
    //     this.viewByCategoryComonent.category = param.view.split('-').join(' ').toUpperCase();
    //   })
    // }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.router.navigate(['category/', event.target.value.toLowerCase().split(' ').join('-')]);
    this.selectedCategory = '';
  }

  onClearSearchText() {
    this.searchText = '';
  }

  onNavigateToBiographies() {
    this.isToggleMenu = false;
    this.namebutton.nativeElement.classList.remove('bi-x');
    this.namebutton.nativeElement.classList.add('bi-list');
    this.animationMenuState = 'down';
    window.scrollTo(0, 0);
    this.router.navigate(['category/biographies']);

  }
  onNavigateHome() {
    this.isToggleMenu = false;
    this.namebutton.nativeElement.classList.remove('bi-x');
    this.namebutton.nativeElement.classList.add('bi-list');
    this.animationMenuState = 'down'
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.router.navigate(['/'])
  }

  onNavigate(selected: any) {
    window.scrollTo(0, 0);
    this.searchText = '';
    this.celebritiesService.getSearchedCelebrity.next(selected);
    // this.celebrityComponent.dobOfCelebrity = selected.dob.year;
    // this.celebrityComponent.relatedPostArray = [];
    // let celebrities = this.celebritiesService.celebrities.slice();
    // let suffledArray = celebrities.sort(() => 0.5 - Math.random());
    // this.celebrityComponent.relatedPostArray = suffledArray.filter((celebrity: any) => celebrity.categoryId.toLowerCase() === this.celebrityComponent.celebrity.categoryId.toLowerCase());
    this.router.navigate(['/', selected.name.toLowerCase().split(' ').join('-')]);
  }

  onToggleDropDown() {
    this.isDropDownToggle = !this.isDropDownToggle;
  }

  onToggleMobileMenu() {
    this.isToggleMenu = !this.isToggleMenu
  }

  onNavigateToContact() {
    this.router.navigate(['/'], { fragment: 'contact' });
    // this.homeComponent.scrollToContact('contact');
    this.callHomeScrollMethod.next(null)
    this.isToggleMenu = false;
    this.namebutton.nativeElement.classList.remove('bi-x');
    this.namebutton.nativeElement.classList.add('bi-list');
    this.animationMenuState = 'down';
  }

  onNavigateNews() {
    this.isToggleMenu = false;
    this.namebutton.nativeElement.classList.remove('bi-x');
    this.namebutton.nativeElement.classList.add('bi-list');
    this.animationMenuState = 'down';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.router.navigate(['/news'])
  }

  selectedCategory: any
  getvalue(event: any) {
    this.router.url.slice(0, 0)
    this.selectedCategory = `category/${event.target.attributes.value.value.toLowerCase().split(' ').join('-')}`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
