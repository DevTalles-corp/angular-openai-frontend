import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector: 'app-image-tunning-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './imageTunningPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class ImageTunningPageComponent { }
