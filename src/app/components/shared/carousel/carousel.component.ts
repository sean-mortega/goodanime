import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  btnStyle: any;
  currentIndex: number = 0;
  crumbs: any;
  slidesData!: any[];

  @ViewChildren('carouselSlide') slides!: QueryList<ElementRef>;

  constructor() {
    this.currentIndex = 0;
  }

  ngAfterViewInit(): void {
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number): void {
    const count: number = this.slides.length;
    this.crumbs = new Array(count).fill('');

    this.slides.forEach((slide: ElementRef, idx: number) => {
      slide.nativeElement.style.display = idx === index ? 'block' : 'none';
    });
    console.log('slide', index);
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
  }

  ngOnInit() {
    this.btnStyle = {
      background: 'var(--bg-secondary)',
      color: '#000',
      'border-radius': '150px !important',
      'text-transform': 'uppercase',
    };
    this.slidesData = [
      {
        img: 'https://res.cloudinary.com/drtr6i0qt/image/upload/v1693368949/banner-good-sm_kpcgcn.png',
        title: 'Slide 1 Title',
        desc: 'lorem ipsum dolor sit amet constiteneur',
        ctaText: 'Click Here',
        ctaBg: this.btnStyle,
      },
      {
        img: 'https://res.cloudinary.com/drtr6i0qt/image/upload/v1693456088/goodanime/banner-small_wz7ejj.png',
        title: 'Slide 2 Title',
        desc: 'Dolor sit amet constiteneur',
        ctaText: 'Click Here',
        ctaBg: this.btnStyle,
      },
      {
        img: 'https://res.cloudinary.com/drtr6i0qt/image/upload/v1693368949/banner-good-sm_kpcgcn.png',
        title: 'Slide 3 Title',
        desc: 'sit amet constiteneur',
        ctaText: 'Click Here',
        ctaBg: this.btnStyle,
      },
    ];
  }
}
