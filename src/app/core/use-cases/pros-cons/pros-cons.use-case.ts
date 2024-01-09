import { environment } from 'environments/environment';
import type { ProsConsResponse } from '@interfaces/pros-cons.response';


export const prosConsUseCase = async(prompt: string) => {



  try {

    const resp = await fetch(`${ environment.backendApi }/pros-cons-discusser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    if ( !resp.ok ) throw new Error('No se pudo realizar la comparación');

    const data = await resp.json() as ProsConsResponse;

    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    console.log(error);
    // throw new Error('No se pudo realizar la comparación')
    return {
      ok: false,
      role: '',
      content: 'No se pudo realizar la comparación'
    }
  }



}
