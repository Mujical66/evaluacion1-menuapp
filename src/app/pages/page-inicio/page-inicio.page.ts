/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 13-Junio-2025
Nombre del código: page-inicio.page.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Este código permite definir la logica de componentes, servicios, modulos y controladores, 
para el funcionamiento de los archivos de la pagina de inicio o página principal.
#####################################
*/

/* PARA LA ACTUALIZACIÓN NO SE REALIZO NINGUN CAMBIO */

/* Área de Importaciones necesaria para el funcionamiento del código. */

/* Importación del núcleo de Angular para la creación de componentes. */
import { Component } from '@angular/core';

/* Importación de componentes de Ionic para la estructura de la interfaz de usuario. */
import { IonHeader, IonContent, IonButton } from '@ionic/angular/standalone';

/* Importación del menú principal de la aplicación. */
import { MenuPrincipalComponent } from '../../components/menu-principal.component';

/* @Component área o sector que define la configuración del componente 'PageInicio'. */
@Component({
  selector:
    'app-page-inicio' /* Selector del componente utilizado en los templates o plantillas de HTML. */,
  templateUrl:
    './page-inicio.page.html' /* Indica la ubicación o ruta del archivo HTML que define la estructura de la página de inicio. */,
  styleUrls: [
    './page-inicio.page.scss',
  ] /* Indica la ubicación o ruta del archivo CSS que define los estilos de la página de inicio. */,
  standalone:
    true /* Indica que este componente es independiente (SatndAlone). */,
  imports: [
    IonHeader,
    IonContent,
    MenuPrincipalComponent,
  ] /* Importación de todos los componentes necesarios para la página de inicio. */,
})

/* Esta es la clase que representa la página de inicio de la aplicación y puede ser exportada para que pueda ser usada por otros modulos. */
export default class PageInicioPage {}
