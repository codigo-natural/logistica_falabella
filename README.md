# Logistica Falabella

## Frontend:

| para el frontend use Reactjs, Tailwindcss, React-router-dom, axios


## Backend

| para el Backend use Nodejs, express, Docker, Mysql

para conectarte usando docker debes hacer uso del archivo .env.example
y copiar las variables de este archivo para que luego las pegues en el archivo .env.

para levantar Docker debes estar ubicado en la carpeta backend en la terminal y usar:

````bash
docker-compose up -d
```

<p>esto levantara la base de datos mysql y la interfaz grafica de phpmyadmin. <br/>
para ingresar a la base de datos debes usar las credenciales del archivo .env
</p>

para crear las tablas de la base de la base de datos ejecute los siguientes comandos sql

```sql
  CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(255) NOT NULL,
  numeroEnvio VARCHAR(255) NOT NULL,
  nombreOficina VARCHAR(255) NOT NULL,
  fechaRegistroEnvio DATE NOT NULL,
  alto INT,
  largo INT,
  ancho INT,
  seller VARCHAR(255) NOT NULL,
  direccionSeller VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS conductores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  placa VARCHAR(10) NOT NULL,
  documento VARCHAR(20) NOT NULL,
  operadorLogistico VARCHAR(255) NOT NULL
);
```