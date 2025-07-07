# KATHCl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Colaboración con Git

El proyecto utiliza Git para el control de versiones. Se recomienda alojarlo en GitHub o GitLab y trabajar mediante ramas y *pull requests* para cada funcionalidad.

1. Clona el repositorio y crea una rama por característica.
2. Cuando finalices los cambios, abre un *pull request* para revisión.
3. Tras la aprobación, fusiona la rama con la rama principal.
4. Nombra las ramas siguiendo el prefijo `feature/`, por ejemplo `feature/registro-form`.
5. Utiliza [Conventional Commits](https://www.conventionalcommits.org) en tus mensajes,
   por ejemplo `feat(registro): agregar validación de contraseña`.

### Pasos básicos

1. Crea el repositorio con `git init` o clónalo con `git clone <url>`.
2. Genera una rama para cada tarea: `git checkout -b feature/nueva-funcion`.
3. Realiza cambios y guarda commits descriptivos:
   ```bash
   git add src/app/nuevo.component.ts
   git commit -m "feat(nuevo): componente inicial"
   ```
4. Sube la rama al remoto con `git push origin feature/nueva-funcion`.
5. Abre un *pull request* en GitHub/GitLab para revisión.
6. Tras aprobar el PR, fusiona la rama en `main` y actualiza tu copia con `git pull`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Formularios reactivos

Los componentes `Registro` y `Contacto` implementan formularios reactivos con validaciones de campos requeridos, correo electrónico y reglas personalizadas para las contraseñas.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
The proyecto incluye pruebas para los formularios principales. Ejecuta `npm test -- --watch=false --browsers=ChromeHeadless` para ejecutarlas en un entorno sin interfaz gráfica.

## Documentación con Compodoc

Ejecuta `npm run docs` para generar la documentación con Compodoc. Luego abre
`http://localhost:8080` en tu navegador para visualizarla.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
