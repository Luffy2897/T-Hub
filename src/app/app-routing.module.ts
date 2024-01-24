import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './Landing-page/first-page.component';
import { FivePageComponent } from './custom-page/five-page.component';
import { FourthPageComponent } from './Tcq-page/fourth-page.component';
import { SecondPageComponent } from './offering-page/second-page.component';
import { ThirdPageComponent } from './pmq-page/third-page.component';
import { SixPageComponent } from './six-page/six-page.component';
import { LocationSpocComponent } from './location-spoc/location-spoc.component';

import { NewPageComponent } from './open-calender/new-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FeedPageComponent } from './reference-doc/feed-page.component';
import { ItBasicComponent } from './it-basic/it-basic.component';
import { ItIntermediateComponent } from './it-intermediate/it-intermediate.component';
import { ItAdvanceComponent } from './it-advance/it-advance.component';
import { ItExpertComponent } from './it-expert/it-expert.component';
import { ItEmbeddedBasicComponent } from './it-embedded-basic/it-embedded-basic.component';
import { EmbeddedBasicComponent } from './embedded-basic/embedded-basic.component';
import { EmbeddedIntermediateComponent } from './embedded-intermediate/embedded-intermediate.component';
import { EmbeddedAdvanceComponent } from './embedded-advance/embedded-advance.component';
import { ItEmbeddedIntermediateComponent } from './it-embedded-intermediate/it-embedded-intermediate.component';
import { ItEmbeddedAdvanceComponent } from './it-embedded-advance/it-embedded-advance.component';
import { ItEmbeddedExpertComponent } from './it-embedded-expert/it-embedded-expert.component';
import { EmbeddedExpertComponent } from './embedded-expert/embedded-expert.component';
import { ElectricalBasicComponent } from './electrical-basic/electrical-basic.component';
import { ElectricalIntermediateComponent } from './electrical-intermediate/electrical-intermediate.component';
import { ElectricalAdvanceComponent } from './electrical-advance/electrical-advance.component';
import { ElectricalExpertComponent } from './electrical-expert/electrical-expert.component';
import { ProcessBasicComponent } from './process-basic/process-basic.component';
import { ProcessIntermediateComponent } from './process-intermediate/process-intermediate.component';
import { ProcessAdvanceComponent } from './process-advance/process-advance.component';
import { ProcessExpertComponent } from './process-expert/process-expert.component';
import { TestingBasicComponent } from './testing-basic/testing-basic.component';
import { TestingIntermediateComponent } from './testing-intermediate/testing-intermediate.component';
import { TestingAdvanceComponent } from './testing-advance/testing-advance.component';
import { TestingExpertComponent } from './testing-expert/testing-expert.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'third', component: ThirdPageComponent },
  { path: 'four', component: FourthPageComponent },
  { path: 'five', component: FivePageComponent },
  { path: 'six', component: SixPageComponent },
  { path: 'location', component: LocationSpocComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'open-calender', component: NewPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'reference', component: FeedPageComponent },
  { path: 'faq', component: FeedPageComponent },
  { path: 'itb', component: ItBasicComponent},
  { path: 'iti', component: ItIntermediateComponent},
  { path: 'ita', component: ItAdvanceComponent},
  { path: 'ite', component: ItExpertComponent},
  { path: 'it-embd-b', component: ItEmbeddedBasicComponent},
  { path: 'it-embd-i', component: ItEmbeddedIntermediateComponent},
  { path: 'it-embd-a', component: ItEmbeddedAdvanceComponent}, 
  { path: 'it-embd-e', component: ItEmbeddedExpertComponent},
  { path: 'embd-b', component: EmbeddedBasicComponent},
  { path: 'embd-i', component: EmbeddedIntermediateComponent},
  { path: 'embd-a', component: EmbeddedAdvanceComponent}, 
  { path: 'embd-e', component: EmbeddedExpertComponent},
  { path: 'ele-b', component: ElectricalBasicComponent},
  { path: 'ele-i', component: ElectricalIntermediateComponent},
  { path: 'ele-a', component: ElectricalAdvanceComponent},
  { path: 'ele-e', component: ElectricalExpertComponent},
  { path: 'pro-b', component: ProcessBasicComponent},
  { path: 'pro-i', component: ProcessIntermediateComponent},
  { path: 'pro-a', component: ProcessAdvanceComponent},
  { path: 'pro-e', component: ProcessExpertComponent},
  { path: 'test-b', component: TestingBasicComponent},
  { path: 'test-i', component: TestingIntermediateComponent},
  { path: 'test-a', component: TestingAdvanceComponent},
  { path: 'test-e', component: TestingExpertComponent},



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
