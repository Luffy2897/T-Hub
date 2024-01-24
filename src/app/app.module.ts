import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './Landing-page/first-page.component';
import { SecondPageComponent } from './offering-page/second-page.component';
import { ThirdPageComponent } from './pmq-page/third-page.component';
import { FourthPageComponent } from './Tcq-page/fourth-page.component';
import { FivePageComponent } from './custom-page/five-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SixPageComponent } from './six-page/six-page.component';
import { LocationSpocComponent } from './location-spoc/location-spoc.component';

import { NewPageComponent } from './open-calender/new-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FeedPageComponent } from './reference-doc/feed-page.component';
import { FAQComponent } from './faq/faq.component';
import { ItBasicComponent } from './it-basic/it-basic.component';
import { ItIntermediateComponent } from './it-intermediate/it-intermediate.component';
import { ItAdvanceComponent } from './it-advance/it-advance.component';
import { ItExpertComponent } from './it-expert/it-expert.component';
import { ItEmbeddedBasicComponent } from './it-embedded-basic/it-embedded-basic.component';
import { ItEmbeddedIntermediateComponent } from './it-embedded-intermediate/it-embedded-intermediate.component';
import { ItEmbeddedAdvanceComponent } from './it-embedded-advance/it-embedded-advance.component';
import { ItEmbeddedExpertComponent } from './it-embedded-expert/it-embedded-expert.component';
import { EmbeddedExpertComponent } from './embedded-expert/embedded-expert.component';
import { EmbeddedAdvanceComponent } from './embedded-advance/embedded-advance.component';
import { EmbeddedBasicComponent } from './embedded-basic/embedded-basic.component';
import { EmbeddedIntermediateComponent } from './embedded-intermediate/embedded-intermediate.component';
import { ElectricalBasicComponent } from './electrical-basic/electrical-basic.component';
import { ElectricalIntermediateComponent } from './electrical-intermediate/electrical-intermediate.component';
import { ElectricalAdvanceComponent } from './electrical-advance/electrical-advance.component';
import { ElectricalExpertComponent } from './electrical-expert/electrical-expert.component';
import { ProcessExpertComponent } from './process-expert/process-expert.component';
import { ProcessAdvanceComponent } from './process-advance/process-advance.component';
import { ProcessIntermediateComponent } from './process-intermediate/process-intermediate.component';
import { ProcessBasicComponent } from './process-basic/process-basic.component';
import { TestingBasicComponent } from './testing-basic/testing-basic.component';
import { TestingIntermediateComponent } from './testing-intermediate/testing-intermediate.component';
import { TestingAdvanceComponent } from './testing-advance/testing-advance.component';
import { TestingExpertComponent } from './testing-expert/testing-expert.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FivePageComponent,
    SixPageComponent,
    LocationSpocComponent,

    NewPageComponent,
    AboutPageComponent,
    NewsPageComponent,
    FeedPageComponent,
    FAQComponent,
    ItBasicComponent,
    ItIntermediateComponent,
    ItAdvanceComponent,
    ItExpertComponent,
    ItEmbeddedBasicComponent,
    ItEmbeddedIntermediateComponent,
    ItEmbeddedAdvanceComponent,
    ItEmbeddedExpertComponent,
    EmbeddedExpertComponent,
    EmbeddedAdvanceComponent,
    EmbeddedBasicComponent,
    EmbeddedIntermediateComponent,
    ElectricalBasicComponent,
    ElectricalIntermediateComponent,
    ElectricalAdvanceComponent,
    ElectricalExpertComponent,
    ProcessExpertComponent,
    ProcessAdvanceComponent,
    ProcessIntermediateComponent,
    ProcessBasicComponent,
    TestingBasicComponent,
    TestingIntermediateComponent,
    TestingAdvanceComponent,
    TestingExpertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,

    MatExpansionModule,

    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
