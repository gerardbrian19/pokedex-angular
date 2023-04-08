# PokedexAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


.container {
  position: relative;
  display: flex;
  justify-content: end;
  margin-right: 20px;
}
::-webkit-scrollbar {
  width: 7px;
  background-color: #910305 !important;
}
::-webkit-scrollbar-thumb {
  background-color: #fb7248 !important;
}
.right {
  display: flex;
  align-items: center;
  width: 38%;
  height: 55px;
  margin: 10px 0;
  padding: 5px 20px;
  font-size: 24px;
  font-weight: 700;
}
.right:hover {
  background: linear-gradient(135deg, #f0501d 40%, black 40%);
  border-radius: 50px;
  cursor: pointer;
}
.right:hover > :nth-child(3) {
  color: white;
}
.right:hover > :nth-child(4) {
  filter: invert(1);
}
.show {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 450px;
  height: 75vh;
  left: 10%;
  bottom: 10%;
  z-index: 2;
}
.show > img {
  filter: drop-shadow(2px 4px 12px black);
  max-width: 300px;
}
.stat-container-title {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-left: -5%;
  padding: 0 10px;
  width: 110%;
  height: 65px;
  border-radius: 5px;
  background: linear-gradient(135deg, #f0501d 40%, black 40%);
}
.image-title {
  width: 45px;
  min-height: 60px;
  margin-right: 10px;
}
.pokeball-title {
  width: 40px;
  margin-left: auto;
  filter: invert(1);
}
.stats-left,
.stats-right {
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
}

.stats-left > p,
.stats-right > p {
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px;
  border-bottom: 1px solid #90979f38;
}
.base-stats {
  display: flex;
  width: 100%;
  background: #ffffff;
}
.base-stats > div {
  text-align: center;
  width: 100%;
}


pokemoncard css

.all-container {
  height: 86vh;
  position: absolute;
  top: 80px;
  right: 30px;
  overflow-y: scroll;
  width: 100%;
}
pokemonlist css