# backend-proyecto-final-numen
<h2>Proyecto Final de Backend Academia Numen</h2>
<p>El proyecto consiste el desarrollo de un servidor en Node js/Express con sus respectivos métodos HTTP para la comunicación con la base de datos para una librería. </p>
<p><strong>Base de Datos:</strong>  Mongo DB</p>
<p><strong>Características:</strong></p>
<p>
- Se crearon modelos para libros y para usuarios. <br/>
- El CRUD es en libros: cualquier usuario puede ver todos los libros o un libro por id, sin embargo sólo los administradores pueden crear/editar o borrar libros de la base de datos. Para ello se crearon middlewares y se utilizó express-validator en controllers.  <br/>
- Los usuarios pueden registrarse, ingresar (login) y salir (logout). Al ingresar con login adquieren rol de administrador.  <br/>
- Se utiliza Axios para consultar una API externa de libros por temas.
</p>
