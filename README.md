# Contacts

Simple contact management app

## Tech Stack

- Angular 12
- Angular Material
- Bootstrap 5
- NgRx Store
- Build Prozess mit Pre- & Post-Steps
  - ESLint
  - Stylelint
  - HTMLHint
  - Prettier
  - Jest
    - Coverage
- Conventional Changelog
- Heroku Deployment

## Pre-Build Steps

| step      | beschreibung                                                                               |
| --------- | ------------------------------------------------------------------------------------------ |
| prebuild  | führt alle Pre-Build Steps sequenziell aus                                                 |
| lint      | führt alle Lint Steps parallel aus                                                         |
| lint:html | statische Codeanalyse für HTML Files mit htmlhint                                          |
| lint:scss | statische Codeanalyse für SCSS Files mit stlyelint                                         |
| lint:ts   | statische Codeanalyse für TS Files mit eslint; sofern möglich: automatische Fehlerbehebung |
| test      | Unit Tests mit JEST                                                                        |

## Post-Build Steps

| step              | beschreibung                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| postbuild         | führt alle Post-Build Steps sequenziell aus                                                                               |
| postbuild:replace | Replacing von fix definierten Placeholder im gesamten /dist Ordner <br> - %APP_VERSION% → process.env.npm_package_version |

## Heroku

https://mindstorm-contacts.herokuapp.com
