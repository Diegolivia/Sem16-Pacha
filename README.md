# Sem16-Pacha

-¿Qué es VUEX, ventajas y desventajas?
    VUEX es una libreria de gestion de estado de Vue, trabaja como una central de almacenaje para los componentes de manera que la informacion entre ellas pueda ser compartida de manera mas eficaz y sencilla a comparacion de vue normal.
    Ventajas:
     -El codigo requerido por cada componente puede ser reducido ya que no necesitara agregarse logica de negocio innecesaria.
     -Ya que el patron de diseño Flux facilita la comunicacion entre componentes, no es necesario tener que comunicar directamente componentes que se encuentran en diferentes esquemas de herencia.
    Desventajas:
     -En caso de que un componente este generando un fallo en algun dato del almacen, es mas complicado buscarlo ya que todos los componentes tienen acceso a la misma informacion.
     -La validacion de informacion debe de ser replicada en cada componente en caso de que se desee modificar los valores en el almacenamiento del estado.
     -No es util en caso necesitamos una pagina web sencilla ya que requiere una cantidad mayor de trabajo que acaba convirtiendose en innecesaria.

-Cuáles son los principales conceptos de VUEX y ejemplificarlos
    -Estado: Es el almacen donde puede contener cualquier tipo de informacion del app
    -Getters: Se encargan de recoger la informacion del estado y arreglarla para poder ser utilizada por el usuario.
    -Mutaciones: Son aquellas funciones que se encargan de modificar el estado de la informacion y son llamadas por las acciones.
    -Acciones: Posee la logica de negocio y llaman a las mutaciones para realizar los cambios en el estado del app, son capaces de llamar otras acciones usando dispatch
    -Modulos: Los modulos son distintos "almacenes" que pueden ser utilizados con su propio estado, mutaciones, acciones, etc. Se usan en caos que se desee especializar alguno de estos modulos en algunas apps de gran escala.

-Por qué y para qué se necesitaria utilizar un administrador de estados?
    Un administrador de estados es capaz de convertir la informacion de tu app en la forma de una estructura legible y utilizable. Por lo que la data deja de volverse una masa invisible y se vuelve accesible para poder ser manejada de la manera que el programador lo decida.