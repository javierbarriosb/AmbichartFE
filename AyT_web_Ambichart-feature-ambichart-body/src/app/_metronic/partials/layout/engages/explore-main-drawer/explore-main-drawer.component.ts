import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-explore-main-drawer',
  templateUrl: './explore-main-drawer.component.html'
})
export class ExploreMainDrawerComponent {
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;
  appPreviewUrl: string = environment.appPreviewUrl;
  appDemos = environment.appDemos;
}
