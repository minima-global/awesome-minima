# Minima-tutorials
Una serie de tutoriales sobre la blockchain Minima, desde el nivel básico al avanzado.

- **Tutorial 1: Entendiendo el modelo UTXO**
  - En este tutorial aprenderemos como funciona el modelo UTXO en Minima, crearemos una dirección wallet y la utilizaremos para enviar monedas Minima a otro nodo o recibirlas desde otro nodo a nuestra dirección wallet(nodo).
  - Lo podemos realizar de varias formas:
    - Utilizando un mismo ordenador con dos nodos Minima funcionando en distintos puertos.
    - Utilizando dos ordenadores distintos los cuales estarán ejecutando un nodo Minima cada uno.
    - Utilizando un ordenador y un móvil los cuales estarán ejecutando un nodo Minima cada uno.
    - Utilizando 2 móviles los cuales estarán ejecutando un nodo Minima cada uno(tendrán que tener la aplicación minima instalada y funcionando)
  - Para poder realizar este tutorial necesitaremos una moneda (1 Minima).
  Para poder conseguir esta moneda la tendremos que pedir en el Discord de Minima, en el canal "#app-chat" publicando nuestra dirección wallet y pidiendo que nos envíen 1 minima.
  - <https://github.com/josua-j/Tutorials-3/blob/main/basic/1-UTXO-create-send-Tutorial.md>

- **Tutorial 2: Enviar Tokens**
  - En este tutorial aprenderemos a enviar Tokens en vez de Minimas, tendrás que localizar la propiedad _tokenid_  , la cual es imprescindible para poder enviar Tokens entre dos nodos a sus direcciones wallet, utilizaremos la consola y los comandos que Minima nos proporciona para realizar el tutorial.
  - Lo podemos realizar de varias formas:
    - Utilizando un mismo ordenador con dos nodos Minima funcionando en distintos puertos.
    - Utilizando dos ordenadores distintos los cuales estarán ejecutando un nodo Minima cada uno.
    - Utilizando un ordenador y un móvil los cuales estarán ejecutando un nodo Minima cada uno.
    - Utilizando 2 móviles los cuales estarán ejecutando un nodo Minima cada uno(Cendran que tener la aplicación minima instalada u funcionando)
  - Para poder realizar el tutorial necesitaremos algunos Tokens.
   Para poder conseguir los Tokens los tendremos que pedir en el Discord de Minima, en el canal "#app-chat" publicando nuestra dirección wallet y pidiendo que nos envíen algunos Tokens.
  - <https://github.com/josua-j/Tutorials-3/blob/main/basic/2-Send-Tokens-Tutorial.md>

- **Tutorial 3: Crear un Token parte 1**
  - Este tutorial que consta de dos partes, en la primera parte aprenderemos a utilizar la consola de Minima y los comandos que esta nos proporciona para crear un Token a partir de monedas Minima(un token siempre necesita una parte fraccional de 1 minima para poderlo crear).
  En esta primera parte también explicaremos, a un nivel básico, que son las transacciones y como entender el resultado de la consola cuando ejecutamos el comando de crear un token.
  - <https://github.com/josua-j/Tutorials-3/blob/main/basic/3-Create_token-tutorial-1.md>

- **Tutorial 4: Crear un Token  parte 2**
  - En la primera parte del tutorial vimos como usar el comando de Minima **tokencreate** desde la consola para explicar como crear Tokens usando Minimas.
  - En esta segunda parte aprenderemos a usar mas opciones de este comando, **tokencreate**, para añadir mas información al Token que un simple "nombre".
  - Utilizaremos la estructura **JSON** para introducir mas información que un simple nombre al Token que crearemos.
  - Crearemos un Token que representará un Token de poderes en un simple juego, un juego desarrollado con  **GODOT engine**, el juego reaccionará cuando el nodo donde se este ejecutando Minima y el juego reciba uno de estos Token de poderes en la dirección wallet del nodo, haciendo que el tamaño del jugador y el color de este cambien en función de las propiedades definidas en el Token recibido.
  - Usaremos un nuevo comando de Minima desde la consola: **coins relevant:true**
  - Si utilizamos un móvil utilizaremos un nuevo comando de Minima desde la consola: **rpc enable:true**
  - Usaremos transacciones para evitar el "problema" del modelo UTXO que explicamos en el tutorial 1.
  - La aplicación-juego que vamos a usar para realizar el tutorial consta de tres partes:
    - **Un Juego** Donde podremos comprobar como el color y tamaño del jugador se modifica cuando un token de poderes se envía a la dirección wallet del nodo de Minima.
    El juego simplemente consiste en un jugador que tiene que recoger gemas, hay dos tipos de gemas, según el tipo de gema que recojas, el juego te quita 0.01 Minima o 0.1 Minima.
    - **Una Consola** parecida a a consola de Minima donde puedes ejecutar cualquier comando de Minima como (tokencreate) y donde podrás copiar los resultados de la consola cuando ejecutes los comandos.
    - **Un Splitter** es una función que va dividir 1 Minima en unidades mas pequeñas de 0.1 o 0.01 unidades en una sola transacción para evitar los "problemas" del modelo UTXO, ya que el juego, cada vez que se recoja una gema ejecuta el comando ` send ` con una cantidad de "0.1" o "0.01" Minimas, y sino tenemos generadas unidades minimas de estas cantidades el juego no va a ser fluido.
  - <https://github.com/josua-j/Tutorials-3/blob/main/basic/4-Create_token-tutorial-2.md>

- **Tutorial 5: Crear un DAO Simple**
  - Esta es la primera parte de una serie de tutoriales donde vamos a desarrollar un "simpleDAO" (Gente con un Token de gobernanza) tendrá el poder de votar una proposición(la primera parte solo tendrá una proposición sobre la que votar "si" o "no").
  - Usaremos Tokens, smart contracts(script, contratos inteligentes), Html, Javascript o una aplicación GODOT con un entorno prefijado para poder realizar y testar las pruebas.
    - **--------->  UNDER CONSTRUCTION  <-------------**
{}
- by @JOSUA
