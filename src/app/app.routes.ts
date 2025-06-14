/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 13-Junio-2025
Nombre del código: app.routes.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Archivo principal para definir todas las rutas de la aplicación o app (este es un archivo importante.).
#####################################
*/

/* Área principal de las Importaciones necesaria o requeridas para el funcionamiento de la app, funciones de las Routes. */
import { Routes } from '@angular/router';

/* Área para definir y exportar todas las rutas de la aplicación que seran utilizadas en la  interfaz de Routes. */

export const routes: Routes = [
  /* Redirección inicial */
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },

  /* Estructura principal de tabs, se aplico
  una nueva estructura de menu por medio de TABS en
  la parte inferior
  */
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tab-inicial/tab-inicial.page').then(
        (m) => m.TabInicialPage
      ),
    /* Estructura de las nuevas rutas de navegacion hijas del menú de TABS */
    children: [
      /* Asignación de ruta de inicio o pagina principal  */
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/page-inicio/page-inicio.page').then((m) => m.default),
      },

      /* Asignación de ruta de Información Principal */
      {
        path: 'informacion-personal',
        loadComponent: () =>
          import('./pages/page-inf-personal/page-inf-personal.page').then(
            (m) => m.default
          ),
      },

      /* Asignación de ruta de Contacto */
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/page-contacto/page-contacto.page').then(
            (m) => m.default
          ),
      },

      /* Asignación de la ruta de inicio al cargar la app  */
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];
