import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector: 'app-text-to-audio-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './textToAudioPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class TextToAudioPageComponent { }
