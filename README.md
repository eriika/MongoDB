# MongoDB

Desarrollo de Aplicaciones Web

MongoDB1

Erika Navarro Delgado


En esta tarea vamos a utilizar una colección de calificaciones de estudiantes, 
todas las respuestas deben de colocarse en un archivo llamado tarea_1.js, utilizando comentarios 
deben colocarse las preguntas, luego comandos utilizados y de nuevo en comentarios las respuestas.

1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:

$ mongoimport -d students -c grades < grades.json

2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:

>use students;
>db.grades.count()

cuantos registros arrojo el comando count?

3) Encuentra todas las calificaciones del estudiante con el id numero 4
4) ¿Cuantos registros hay de tipo exam?
5) ¿Cuantos registros hay de tipo homework?
6) ¿Cuantos registros hay de tipo quiz?
7) Elimina todas las calificaciones del estudiante con el id numero 3
8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
10) A que estudiante pertenece esta calificación.

Suerte!
