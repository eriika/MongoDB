//ERIKA NAVARRO DELGADO 256820
//FECHA DE ENTREGA 29/09/2015

//Muestra las bases de datos existentes

show dbs;

//local 0.078GB
//students 0.078GB

//en nuestro caso usaremos la base de datos de students para poder elaborar la practica
use students;

db.grades.count()


//2) ¿Cuantos registros arrojo el comando count? 
800

//3) Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({"student_id":4});
//r: 87.89071881934647, 5.244452510818443, 28.656451042441, 27.29006335059361

//4) ¿Cuantos registros hay de tipo exam?
db.grades.count({"type":"exam"});
//r: 200

//5) ¿Cuantos registros hay de tipo homework?
db.grades.count({"type":"homework"});
//r: 400

//6) ¿Cuantos registros hay de tipo quiz?
db.grades.count({"type":"quiz"});
//r: 200

//7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.remove({"student_id":3});
//r: WriteResult({"nRemoved": 4})

//8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({"score": 75.29561445722392});
//r:  "student_id" : 9

//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
db.grades.update({"_id":  ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score": 100}});
//10) A que estudiante pertenece esta calificación
db.grades.find({"score": 100});

// r: "student_id" : 6
