# ✅ Cypress E2E Tests

Ten projekt zawiera automatyczne testy end-to-end (E2E) stworzone przy użyciu [Cypress](https://www.cypress.io/), służące do testowania aplikacji webowej w sposób zbliżony do rzeczywistych interakcji użytkownika.

---

## 📦 Wymagania

- Node.js (zalecana wersja: LTS, np. 18.x)
- npm lub yarn

---

## 🔧 Instalacja

1. Sklonuj repozytorium:

```bash
git clone https://github.com/adamkgt/test_auto.git
cd test_auto
```

2. Zainstaluj zależności:

```bash
npm install
# lub
yarn install
```

---

## 🚀 Uruchamianie testów

### Interaktywny tryb GUI:

```bash
npx cypress open
```

Otworzy się aplikacja Cypress, gdzie możesz uruchomić testy w wybranej przeglądarce.

### Tryb headless (np. CI/CD):

```bash
npx cypress run
```

Uruchamia testy w tle i pokazuje wyniki w terminalu.

---

## 📁 Struktura projektu

```
cypress/
├── my_tests
│   └── fake_store_page.cy.js
cypress.config.js    # Konfiguracja Cypressa
```


---

## ⚙️ Konfiguracja

Wszystkie ustawienia znajdują się w pliku `cypress.config.js`, gdzie można ustawić np.:

- `baseUrl`
- `viewportWidth` / `viewportHeight`
- `retries`
- `video` (nagrywanie testów)

---

## 🔄 Integracja z GitHub Actions (CI)

Plik `.github/workflows/cypress.yml`:

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```

---

## 📄 Licencja

Projekt dostępny na licencji **MIT** – możesz używać, kopiować i modyfikować bez ograniczeń.

---

## 📬 Kontakt

Masz pytania lub sugestie? Otwórz issue lub napisz do mnie.
