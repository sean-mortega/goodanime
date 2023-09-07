import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';
import { CardComponent } from './components/shared/card/card.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { ShowslistPageComponent } from './components/showslist-page/showslist-page.component';
import { AppService } from './services/app.service';
import { OrdinalPipe } from './utilities/ordinal.pipe';
import { TruncateWordsPipe } from './utilities/trunctatewords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ButtonsComponent,
    CardComponent,
    NavbarComponent,
    TruncateWordsPipe,
    BannerComponent,
    CarouselComponent,
    NewsComponent,
    FooterComponent,
    OrdinalPipe,
    ShowslistPageComponent,
  ],
  providers: [AppService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
