# Invitación Baby Shower

## Objetivo

Crear una invitación digital para un Baby Shower con diseño responsive, elegante y fácil de personalizar.

---

# Estructura General

## 1. Pantalla Inicial (Hero)

Elementos:

* Imagen o ilustración principal.
* Nombre del bebé.
* Texto principal.

Ejemplo:

> Te invitamos a celebrar la llegada de nuestro pequeño(a)

### Información visible:

* Nombre del bebé
* Fecha del evento
* Contador regresivo
* Botón de confirmación

---

# Secciones

## Bienvenida

Pequeño mensaje introductorio.

Ejemplo:

> Cada patadita nos llena de amor y queremos compartir esta hermosa espera contigo.

---

## Información del Evento

### Fecha

`DD / MM / AAAA`

### Hora

`00:00 AM/PM`

### Lugar

`Dirección del evento`

### Código de vestimenta (Opcional)

### Mesa de regalos (Opcional)

---

## Contador Regresivo

Componentes:

* Días
* Horas
* Minutos
* Segundos

Comportamiento:

* Actualización automática cada segundo.
* Al finalizar mostrar mensaje de celebración.

---

## Confirmación de Asistencia

Botón principal:

```text
Confirmar asistencia
```

Opciones:

* WhatsApp
* Formulario
* Google Forms

---

# Distribución Responsive

## Desktop

```text
┌────────────────────────────┐
│          Imagen            │
│       Nombre Bebé          │
│      Texto principal       │
│        Contador            │
│      Botón RSVP            │
└────────────────────────────┘
│      Información           │
│      Mensaje               │
│      Ubicación             │
└────────────────────────────┘
```

---

## Mobile

```text
┌──────────────────┐
│      Imagen      │
│   Nombre Bebé    │
│     Mensaje      │
│    Contador      │
│      RSVP        │
│ Información      │
└──────────────────┘
```

---

# Componentes Sugeridos

## Header

* Logo o monograma.
* Decoraciones.

## Hero

* Imagen principal.
* Nombre.
* Fecha.

## Countdown

* Tarjetas individuales.

## Details Card

* Fecha.
* Hora.
* Dirección.

## Footer

* Mensaje final.
* Redes sociales (opcional).

---

# Variables para Personalización

```yaml
nombre_bebe:
fecha:
hora:
ubicacion:
mensaje_principal:
mensaje_final:
telefono_confirmacion:
imagen_principal:
```

---

# Posibles Secciones Extras

* Galería de fotografías.
* Historia del nombre del bebé.
* Lista de regalos.
* Mapa de ubicación.
* Animaciones.
* Música de fondo.

---

# Notas de Diseño

* Diseño totalmente responsive.
* Prioridad mobile-first.
* Mantener tiempos de carga bajos.
* Utilizar componentes reutilizables.
* Permitir cambios de colores y tipografías mediante variables.

# Lista de invitados
 
 * invitacion personalizada 
 * mensaje tipo "esta invitacion es validad unicamente para { # personas}
 * incluir persona$