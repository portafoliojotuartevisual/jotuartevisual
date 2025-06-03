-- Base de datos para PORTAFOLIO JOTU ARTE VISUAL
CREATE DATABASE IF NOT EXISTS jotu_portafolio CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE jotu_portafolio;

-- Tabla de proyectos
CREATE TABLE proyectos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  imagen VARCHAR(255),
  categoria VARCHAR(100),
  fecha DATE DEFAULT CURRENT_DATE
);

-- Datos de ejemplo
INSERT INTO proyectos (titulo, descripcion, imagen, categoria) VALUES
('Distorsión Natural', 'Colección inspirada en formas orgánicas y estética minimalista.', 'piesas-de-distorcion-natural-180425_Mesa-de-trabajo-1-01.png', 'Diseño gráfico'),
('Estudio Sonoro', 'Proyecto gráfico vinculado a producción musical de estudio.', 'flayer-estudio-sonoro-velas-en-la-oscuridad-02_Mesa-de-trabajo-1.png', 'Música & Arte'),
('Identidad Visual JM', 'Diseño de logotipo y línea gráfica para marca JM.', 'LOGO-JM-png-01.png', 'Branding');

-- Tabla de mensajes de contacto (opcional para formulario)
CREATE TABLE contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
