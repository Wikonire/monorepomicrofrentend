# Monorepomicrofrontend

## Development server
Run `npm run run:all` in terminal to run shell and microfrontends. 
Or start it from the `run:all` script in `package.json`

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
<ul>
  <li>Nutze die <b>neuste</b> Version des Module Federation E-Books unter <a href="https://www.angulararchitects.io/en/book/">diesem Link</a></li>
</ul>
<h2>Für Oblique generell:</h2>
<ul style="line-height:1.5">
 <li> Einsatz für Oblique-Doku separieren --> abstimmung, ob wir das wollen</li>
 <li> Wollen wir als Oblique Micro Frontend aufnehmen in der Doku (In Form von <b>How To</b> für unsere User)?</li>
 <li>Empfehlungen für unsere User, wenn wir Module Federation aufnehmen:
 <ul>
   <li>
     Immer aktuelle Anleitung nutzen
   </li>
 <li>
   Immer aktuelle Angular- plus aktuelle Oblique Versionen nutzen
 </li>
   <li>
     Micro Frontend-Technologie ist nicht überall geeignet.
     <ul>
       <li>
         Kein Ersatz für Lib
       </li>
       <li>
         Kein Ersatz für WebComponents
       </li>
     </ul>
   </li>
   <li>
     Micro frontends machen dann Sinn, wenn sich verschiedene teams um die Lösungen / Pages kümmern
   </li>
   <li>
     Zu fein schneiden macht keinen Sinn
   </li>
   <li>
     Möglichst gleiche angular version nutzen --> reduziert bundles für client
   </li>
   <li>
     Services als Lib bereitstellen, wenn gemeinsam genutzter State genutzt wird (Beispiel )
   </li>
   <li>
     Monorepo nutzen, solange wie möglich (selbes projekt gegenüber Kund:in)
   </li>
   <li>
     Evt. libs für monorepo nutzen / anschauen (bspw. https://nx.dev/more-concepts/why-monorepos)
   </li>
   <li>
     Bei Interesse persönlich Tutorial von Manfred Steyer durchgehen (wird augenscheinlich regelmässig aktualisiert)
   </li>
 </ul>
 </li>
</ul>
