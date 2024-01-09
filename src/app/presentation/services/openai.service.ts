import { Injectable } from '@angular/core';
import { orthographyUseCase, prosConsStreamUseCase, prosConsUseCase } from '@use-cases/index';
import { from } from 'rxjs';



@Injectable({providedIn: 'root'})
export class OpenAiService {


  checkOrthography( prompt: string ) {
    return from( orthographyUseCase(prompt) ) ;
  }

  prosConsDiscusser( prompt: string ) {
    return from( prosConsUseCase(prompt) );
  }

  prosConsStreamDiscusser( prompt: string, abortSignal: AbortSignal ) {
    return prosConsStreamUseCase(prompt, abortSignal );
  }

}
