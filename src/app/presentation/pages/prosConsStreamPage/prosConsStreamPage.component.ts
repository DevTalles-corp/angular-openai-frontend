import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector: 'app-pros-cons-stream-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './prosConsStreamPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class ProsConsStreamPageComponent { }
