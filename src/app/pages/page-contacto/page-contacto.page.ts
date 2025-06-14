/* ################################### 
Proyecto: Tarea de Evaluación 1 y 2.
Desarrollador: Luis F. Mujica
Fecha: Mayo 2025
Fecha Act.: 14-Junio-2025
Nombre del código: page-contacto.page.ts
Versión: 1.0.0 (Tarea de Evaluación 1)
Versión: 1.1.0 (Tarea de Evaluación 2)
Descripción: Este código permite definir la logica de componentes, servicios, modulos y controladores, 
para el funcionamiento de los archivos de la pagina de contacto.
#####################################
*/

/* Área de Importaciones necesaria para el funcionamiento del código para la logica de la pagina. */
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonText,
  IonIcon,
  ToastController,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MenuPrincipalComponent } from '../../components/menu-principal.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  person,
  mail,
  documentText,
  chatbubbleEllipses,
  send,
  home,
  warning,
} from 'ionicons/icons';

/* Area de la estructura de los componetes a utilizar en la pagina o formulario */
@Component({
  selector: 'app-page-contacto',
  templateUrl: './page-contacto.page.html',
  styleUrls: ['./page-contacto.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    RouterLink,
    MenuPrincipalComponent,
    ReactiveFormsModule,
    IonText,
    CommonModule,
    IonIcon,
  ],
})

/* Area de exportación para ser utilizada en otros compoentes o formularios */
export default class PageContactoPage {
  contactForm: FormGroup;
  emailPattern: string =
    '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'; /* Linea para validación del campo Email */

  /* Area del constructor de la logica del para el formulario */
  constructor(private fb: FormBuilder, private toastCtrl: ToastController) {
    addIcons({
      person,
      mail,
      documentText,
      chatbubbleEllipses,
      send,
      home,
      warning,
    });

    /* Area de la validación losgica de cada uno de los campos del formulario */
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      try {
        // Area para realizar la Simulación de envío y muestre un mensaje con una duración de 3 segundos
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const toast = await this.toastCtrl.create({
          // Muestra el mensaje de Mensaje enviado con exito
          message: 'Mensaje enviado con éxito',
          duration: 3000,
          position: 'top',
          color: 'success',
          icon: 'checkmark-circle',
        });
        await toast.present();

        this.contactForm.reset();
      } catch (error) {
        // Mensaje que se muestra si el mensaje no fue enviado con exito
        const toast = await this.toastCtrl.create({
          message: 'Error al enviar el mensaje',
          duration: 3000,
          position: 'top',
          color: 'danger',
          icon: 'alert-circle',
        });
        await toast.present();
      }
    } else {
      // Mensaje que se muestra si los campos no cumplen con la validación aplicada a cada uno de ellos.
      this.contactForm.markAllAsTouched();
      const toast = await this.toastCtrl.create({
        message: 'Por favor complete todos los campos correctamente',
        duration: 3000,
        position: 'top',
        color: 'warning',
        icon: 'warning',
      });
      await toast.present();
    }
  }
}
