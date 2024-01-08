import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector: 'app-translate-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './translatePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class TranslatePageComponent { }
