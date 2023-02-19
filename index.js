const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const lastname1 = document.getElementById('lastname1').value;
  const lastname2 = document.getElementById('lastname2').value;
  const select_id = document.getElementById('select_id').value;
  const num_id = document.getElementById('num_id').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const phone_num = document.getElementById('phone_num').value;



  alert(`Nombre: ${name}\nPrimer Apellido: ${lastname1}\nSegundo apellido: ${lastname2}\nTipo identificacion: ${select_id}\nN° identificacion: ${num_id}\nCorreo electronico: ${email}\nCiudad: ${city}\nBarrio: ${address}\nN° Celular: ${phone_num}`);

  document.getElementById('name').value = '';
  document.getElementById('lastname1').value = '';
  document.getElementById('lastname2').value = '';
  document.getElementById('select_id').value = '';
  document.getElementById('num_id').value = '';
  document.getElementById('email').value = '';
  document.getElementById('city').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phone_num').value = '';

});

function validarEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
}

async function validarDominio(email) {
    const apiKey = 'API_KEY'; // Reemplazar con clave API
    const domain = email.split('@')[1];
  
    const url = `https://email-verifier1.p.rapidapi.com/v1.0/verify?email=${email}`;
    const respuesta = await fetch(url, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'email-verifier1.p.rapidapi.com'
      }
    });
  
    if (respuesta.ok) {
      const resultado = await respuesta.json();
      if (resultado.format_valid && resultado.smtp_check) {
        return true;
      }
    }
    
    return false;
  }


  if (validarEmail(email) && await validarDominio(email)) {
    alert('Email valido');
  } else {
    alert('Email invalido');
  }


  
