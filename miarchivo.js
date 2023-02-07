
    const precioUno = 8500
   const precioDos = 6500
   const precioTres = 4700
    
    alert("Los servicios disponibles son: Servicio completo en SST, Mediciones ambientales,implementacion de sistema de gestion")
    let servicioIngresado = prompt("Ingrese el servicio que desea contratar")
    
    while(servicioIngresado != "Servicio completo en SST" && servicioIngresado != "Mediciones ambientales" && servicioIngresado != "Implementacion de sistema de gestion"){
        alert("El nombre del servicio no es correcto")
        servicioIngresado = prompt("Ingrese correctamente el nombre del servicio que desea contratar")
        
    }
    
           if(servicioIngresado == "Servicio completo en SST"){
             alert("el costo de este servicio es $" + precioUno) 
            }             
            else if(servicioIngresado === "Mediciones ambientales"){
                alert("el costo del servicio es $" + precioDos)
            }
            else if(servicioIngresado === "Implementacion de sistema de gestion"){
                alert("el costo del servicio es $" + precioTres)
            }else{
                alert("No ingreso el nombre del servicio correctamente")
            }
             servicioIngresado =  prompt("desea agregar otro servicio?")
                    while(servicioIngresado  != "no" &&  servicioIngresado!= "si"){
                        alert("por favor ingresa si o no")

                   servicioIngresado = prompt("Por favor ingrese si o no para proceder")
                    break;
                }
                while(servicioIngresado === "no"){
                    alert ("Gracias por su compra! Hasta pronto") 
                    break;  
                }

               while(servicioIngresado === "si"){
                servicioIngresado =prompt("Ingrese el servicio que desea agregar")
            
                while(servicioIngresado != "Mediciones ambientales" && servicioIngresado != "Servicio completo en SST" && servicioIngresado != "Implementacion de sistema de gestion"){
                    alert("El nombre del servicio ingresado no es correcto")
                    servicioIngresado = prompt("Ingrese correctamente el nombre del servicio que desea agregar")
                    
                }
                
                if(servicioIngresado === "Mediciones ambientales"){
                    precioTotal()
                }else if(servicioIngresado === "Servicio completo en SST"){
                    precioTotal2()
                }else if(servicioIngresado === "Implementacion de sistema de gestion"){
                    precioTotal3()
                }else{
                    alert("no ingreso el nombre del servicio correctamente")
                }
                
            }
               

               function precioTotal (){
                let precioFinal = precioUno + precioDos
                alert("El costo total a pagar es $" + precioFinal + " Gracias por su compra, nos comunicaremos con usted a la brevedad!") 
         
             }  
             
             
              function precioTotal2(){
                let precioFinal = precioDos + precioUno
                alert("El costo total a pagar es $" + precioFinal + " Gracias por su compra, nos comunicaremos con usted a la brevedad!") 
                
               }
             
             
               function precioTotal3(){
                let precioFinal = precioUno + precioTres
                alert("El costo total a pagar es $" + precioFinal + " Gracias por su compra, nos comunicaremos con usted a la brevedad!") 
                
               }
