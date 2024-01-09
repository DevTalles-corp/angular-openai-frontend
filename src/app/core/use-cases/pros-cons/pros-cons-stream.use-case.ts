import { environment } from 'environments/environment';


export async function* prosConsStreamUseCase( prompt: string, abortSignal: AbortSignal ) {

    try {

      const resp = await fetch(`${ environment.backendApi }/pros-cons-discusser-stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt }),
        signal: abortSignal,
      });

      if ( !resp.ok ) throw new Error('No se pudo realizar la comparación');

      const reader = resp.body?.getReader();
      if ( !reader ) {
        console.log('No se pudo generar el reader');
        throw new Error('No se pudo generar el reader');
      }


      const decoder = new TextDecoder();
      let text = '';

      while( true ) {
        const { value, done } = await reader.read();

        if ( done ) {
          break;
        }

        const decodedChunk = decoder.decode( value, { stream: true } );
        text += decodedChunk;
        yield text;

      }


      return text;


    } catch (error) {
      return null;
    }




}
