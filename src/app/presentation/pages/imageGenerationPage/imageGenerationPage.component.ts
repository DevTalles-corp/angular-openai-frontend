import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector: 'app-image-generation-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './imageGenerationPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class ImageGenerationPageComponent { }
