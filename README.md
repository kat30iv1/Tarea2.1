# Tarea2.1
## Rutas disponibles

- `GET .../productos/`  
  Muestra todos los productos.

- `GET .../productos/:id`  
  Retorna un producto específico por su ID.

- `POST .../productos/`  
  Crea un nuevo producto con los datos enviados en el cuerpo de la solicitud.
  Se genera un ID único tras revisar la lista de productos existentes, y la fecha se asigna automáticamente.

- `PUT .../productos/:id`  
  Actualiza los datos de un producto existente a partir de su ID.

- `DELETE .../productos/:id`  
  Elimina un producto en base al ID dado.

 - `GET .../productos/disponibles`  
  Muestra todos los productos que han sido marcados como Disponibles.
  También especifica el número de productos disponibles.

 -  `GET .../productos/search`  
   Busca productos según parámetros de búsqueda en la URL (`?nombre=...`,`?precio=...`).


   La API estará disponible en:
   http://localhost:5000


Al crear o actualizar un producto se hacen las siguientes validaciones:
- Debe tener las propiedades de nombre, precio, y descripción
- El precio debe ser un número mayor a 0
- La descripción tendrá un mínimo de 10 carácteres permitidos
