import React from 'react'

export default function Contacto() {
  return (
    <div>
         <form>
         <div class="form-group">
          <label for="exampleFormControlInput1">Correo</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descripción</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <button type="button" class="btn btn-danger">Enviar</button>
    </div>
  );
}
