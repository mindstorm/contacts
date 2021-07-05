# Contacts

## Pre-Build Steps

prebuild führt alle Pre-Build Steps sequenziell aus
lint führt alle Lint Steps parallel aus
lint:html statische Codeanalyse für HTML Files mit htmlhint
lint:scss statische Codeanalyse für SCSS Files mit stlyelint
lint:ts statische Codeanalyse für TS Files mit eslint; sofern möglich: automatische Fehlerbehebung
test: Unit Tests mit JEST

## Post-Build Steps

postbuild führt alle Post-Build Steps sequenziell aus
postbuild:replace Replacing von fix definierten Placeholder im gesamten /dist Ordner
%APP_VERSION% → process.env.npm_package_version
