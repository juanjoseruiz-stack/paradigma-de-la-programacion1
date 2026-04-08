1. que significa status 201 created y en donde aparece

respuesta:
Es un código de estado HTTP que indica que: La solicitud fue exitosa y se creó un nuevo recurso en el servidor.

Ejemplo:

Cuando haces un POST para crear un usuario
El servidor responde: 201 Created

Lo puedes ver en: Terminal (con curl)


2. como verifico la actualizacion de los datos por medio de la terminal 

respuesta:
Puedes usar curl:

1. Hacer la petición (ejemplo PUT o PATCH)

curl -X PATCH https://api.ejemplo.com/users/1 \
-H "Content-Type: application/json" \
-d '{"name": "Juan"}'


3. cuales son los status existentes y comunes 

respuesta:
Status HTTP más comunes

 Éxito (2xx)
200 OK → Todo salió bien
201 Created → Recurso creado
204 No Content → Éxito sin respuesta

 Cliente (4xx)
400 Bad Request → Error en la solicitud
401 Unauthorized → No autenticado
403 Forbidden → Sin permisos
404 Not Found → No existe el recurso

 Servidor (5xx)
500 Internal Server Error → Error del servidor
502 Bad Gateway
503 Service Unavailable

4. cuando hacer una peticion de tipo patch

respuesta:
Usa PATCH cuando quieres actualizar parcialmente un recurso

 Ejemplo:

{
  "name": "Juan"
}

5. que es soap, cuales son las diferencias con rest

respuesta:
SOAP (Simple Object Access Protocol) es un protocolo para intercambiar información.

 Usa XML
 Es más estricto
  Muy usado en sistemas empresariales antiguos

6. que es graphql, cuales son las diferencias con rest

respuesta:
Diferencias entre GraphQL y REST
GraphQL usa un solo endpoint (por ejemplo: /graphql), mientras que REST suele tener muchos endpoints como /users, /products, etc.

En GraphQL tú decides exactamente qué datos quieres, escribiendo la consulta.

En REST, el servidor define qué datos te devuelve.

Con GraphQL puedes traer datos relacionados en una sola petición.

En REST normalmente necesitas hacer varias solicitudes.

GraphQL evita traer información de más o de menos, porque tú especificas los campos.

En REST a veces recibes datos innecesarios o te faltan datos.

GraphQL tiene un sistema de tipos (schema) que define claramente cómo es la API.

REST no obliga a tener ese esquema tan estructurado.

GraphQL permite funcionalidades como subscriptions para datos en tiempo real.