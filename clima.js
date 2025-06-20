  const elClima = [
    {ciudad: "Armenia", temperatura: 32, clima: "nubes y sol", lluvia: true },
    {ciudad: "Bucaramanga", temperatura: 30, clima: "nubes", lluvia: false },
    {ciudad: "Santander", temperatura: 30, clima: "nubes", lluvia: true },
    {ciudad: "Girardot", temperatura: 32, clima: "nubes y sol", lluvia: false },
    {ciudad: "Santa Marta", temperatura: 34, clima: "sol", lluvia: true },
    {ciudad: "San Gil", temperatura: 34, clima: "sol", lluvia: false },
    {ciudad: "Bogotá", temperatura: 32, clima: "nubes y sol", lluvia: true },
    {ciudad: "Carmen de Apicalá", temperatura: 34, clima: "sol", lluvia: false },
    {ciudad: "Fusagasugá", temperatura: 32, clima: "nubes y sol",lluvia: true },
    {ciudad: "Ibague", temperatura: 30, clima: "nubes", lluvia: true }
  ];
  console.log("El clima inicial es: ", elClima);


  // Math.random() * 5 genera un número entre 0 y 5 (sin incluir el 5). 
  // Math.floor() lo convierte en número entero.

   function actualizarClima() {
    return elClima.map(ciudadClima => {
      const variacion = Math.floor(Math.random() * 5) -2;
      let nuevaTemperatura = ciudadClima.temperatura + variacion;
      

     return { ciudad: ciudadClima.ciudad, clima: ciudadClima.clima, temperatura: nuevaTemperatura,
        lluvia: ciudadClima.lluvia
     };
    });
  }

  console.log("clima normal");


  const climaActualizado = actualizarClima();

  console.log("clima actualizado");
  console.log(climaActualizado);
  
  // falta tarea 

  function aFahrenheit(centigrados){
    return centigrados * (9/5) + 32;
  }

  function agregarFahrenheit(){
    return elClima.map(function(clima)  {
        let aNuevaTemperatura = aFahrenheit(clima.temperatura);
        return {
            ciudad: clima.ciudad, 
            clima: clima.clima, 
            temperatura: clima.temperatura,
            lluvia: clima.lluvia, 
            fahrenheit: aNuevaTemperatura
        }
    })
  }

  let arrayClimaFarenheit = agregarFahrenheit();
  console.log(arrayClimaFarenheit);
