import React from "react";

export default function Labels() {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className='message'>Earphones Pro One</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message'>Headband</h1>
          <p className='message--sub'>
            La diadema es ligera, ajustable y ofrece comodidad superior, 
            ideal para largas sesiones de uso.
          </p>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'>
          <h1 className='message'>Sound Control</h1>
          <p className='message--sub'>
            Experimenta un sonido inmersivo con cancelación de ruido avanzada y claridad total.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--battery page--hidden'>
          <h1 className='message'>Great Battery</h1>
          <p className='message--sub'>
            Hasta 40 horas de autonomía y carga rápida para mantenerte conectado siempre.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'>
          <h1 className='message'>Best Construction</h1>
          <p className='message--sub'>
            Diseño premium con materiales resistentes y detalles que elevan tu experiencia.
          </p>
        </div>
        <div
          id='page-6'
          className='page page--brandlogo page--hidden'>
          <h1 className='message'>Get yours!</h1>
          <button className='comprar'>Buy now</button>
        </div>
      </div>
    </div>
  );
}