# Monorepomicrofrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


#FMZ-Empfehlungen
 -- Nutze die NEUSTE Version des Module Federation E-Books unter (https://www.angulararchitects.io/en/book/)
## Für Team Oblique generell:
 --  Einsatz für Oblique-Doku separieren --> abstimmung, ob wir das wollen
 --  Wollen wir als Oblique Micro Frontend aufnehmen in der Doku (In Form von <b>How To</b> für unsere User)?
 -- Empfehlungen für unsere User, wenn wir Module Federation aufnehmen
--Immer aktuelle Anleitung nutzen   
 --Immer aktuelle Angular- plus aktuelle Oblique Versionen nutzen
   --Micro Frontend-Technologie ist nicht überall geeignet:
       --Kein Ersatz für Lib
       --Kein Ersatz für WebComponents   
   --Micro frontends machen dann Sinn, wenn sich verschiedene teams um die Lösungen und Pages kümmern   
   --Zu fein schneiden macht keinen Sinn   
   --Möglichst gleiche angular version nutzen --> reduziert bundles für client   
   --Services als Lib bereitstellen, wenn gemeinsam genutzter State genutzt wird (Beispiel Login-State)   
   --Monorepo nutzen, solange wie möglich (selbes projekt gegenüber Kund:in)
   --Evt. libs für monorepo nutzen / anschauen (bspw. https://nx.dev/more-concepts/why-monorepos)   
   --Bei Interesse persönlich Tutorial von Manfred Steyer durchgehen (wird augenscheinlich regelmässig aktualisiert)
