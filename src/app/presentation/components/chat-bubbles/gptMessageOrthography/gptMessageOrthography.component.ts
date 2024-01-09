import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component( {
  selector: 'app-gpt-message-orthography',
  standalone: true,
  imports: [

  ],
  templateUrl: './gptMessageOrthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class GptMessageOrthographyComponent {

  @Input({ required: true }) userScore!: number;
  @Input({ required: true }) text!: string;
  @Input() errors: string[] = [];


}
