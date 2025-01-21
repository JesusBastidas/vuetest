# Vue 3 + TypeScript + Vite

Proyecto: Buscador Dinámico con Historial

Este proyecto implementa un buscador dinámico que interactúa con una API externa para buscar repositorios, con funcionalidades como un historial persistente de búsquedas y un spinner para indicar estados de carga. El proyecto está desarrollado en Vue 3, utilizando Pinia para el manejo del estado global, TailwindCSS para el diseño y estilos, y Vite como herramienta de construcción.

📋 Instrucciones para ejecutar el proyecto
1. Instalar dependencias
Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias requeridas:

npm install

2. Iniciar el servidor de desarrollo
Inicia el servidor local con el comando:

npm run dev

El proyecto estará disponible en: http://localhost:3000 (default), sin embargo, si dicho puerto se encuentra ocupado por otro servicio (como apache), es probale que se use el puerto :8000 o :5173.

📝 Resumen del proyecto

Descripción General

El buscador permite realizar consultas dinámicas hacia una API externa (GitHub Search API). Implementa características modernas como un historial interactivo de búsquedas con persistencia, una interfaz atractiva gracias a TailwindCSS, y un manejo de estado eficiente con Pinia. El proyecto está desarrollado en TypeScript, haciendo uso de interfaces para garantizar un tipado estricto y robusto, mejorando la mantenibilidad y claridad del código.

Funcionalidades Implementadas

Búsqueda dinámica:
Permite realizar búsquedas de términos y consultar resultados en tiempo real desde la API.

Historial persistente:
Los últimos 5 términos de búsqueda se almacenan en el historial utilizando localStorage y se pueden seleccionar para realizar búsquedas nuevamente.

Spinner de carga:
Indica el estado de carga cuando se está esperando una respuesta de la API.

Paginación dinámica:
Permite navegar entre resultados utilizando una interfaz paginada.

Dropdown interactivo:
Muestra el historial de búsqueda en un dropdown dinámico.

//Enfoque en TypeScript
Se utilizó TypeScript para implementar un tipado estricto en el proyecto, lo que asegura robustez y ayuda a prevenir errores en tiempo de compilación. En particular, las interfaces definidas en el archivo de tipos (types/dataInterface.ts) son fundamentales para describir la estructura de los datos de respuesta de la API.

⚙️ Detalles técnicos y decisiones clave

Decisiones técnicas

Persistencia del historial:
Se optó por localStorage para almacenar el historial debido a su simplicidad y capacidad para manejar datos entre sesiones sin necesidad de un backend.

Manejo de estados globales:
Pinia se utilizó para manejar el estado global del spinner y el historial, asegurando una comunicación fluida entre componentes.

Diseño responsivo:
TailwindCSS facilita la creación de una interfaz limpia y moderna con soporte integrado para dispositivos móviles.

Rendimiento:
Vite proporciona una experiencia de desarrollo rápida y modular.

xtras
Validaciones:
Los términos vacíos o duplicados no se agregan al historial.

UX/UI:
Se priorizó una experiencia de usuario clara con mensajes visuales para estados de carga y resultados vacíos.

🚧 Limitaciones conocidas y áreas de mejora

Historial limitado a 5 términos:
Aunque funcional, la limitación podría configurarse dinámicamente o manejarse con más opciones (como limpiar historial o personalizar el tamaño del historial).

Falta de pruebas unitarias:
No se implementaron pruebas unitarias ni de integración para validar las funcionalidades del proyecto.

Paginación sencilla:
El sistema de paginación podría ser más avanzado, como permitir al usuario ir directamente a páginas específicas en lugar de un rango limitado.# vuetest
