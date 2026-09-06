# Mark Aaron E. Patoc — React Portfolio

A responsive student portfolio built with Vite, React, JavaScript, and CSS Modules. Includes Home, About Me, Skills, Projects, and Contact sections.

## Run locally


```bash
npm install
npm run dev
```

Use Node.js 24 LTS. Open the URL printed by Vite.

## Verify


```bash
npm run lint
npm run build
npm run preview
```

## Assignment submission

Read [the complete submission guide](docs/SUBMISSION.md) for the folder structure, installation, complete source code, explanations of all five concepts, exact code locations, screenshot checklist, and ready-to-copy descriptions.

See [captured screenshots](docs/screenshots/) and [browser verification results](docs/browser-checks.txt).

![Portfolio preview](docs/screenshots/01-home.png)

## Interactions

- Say hello changes the welcome message.
- Skill and project filters select visible cards.
- Contact inputs update React state and a live character counter.
- Submitting valid demo data shows local feedback and clears the form.
- The mobile menu opens, closes, and closes after choosing a link.

The contact form is a local assignment demo: it does not send or store messages. Email, phone, and GitHub links use the supplied contact details. Google Fonts fall back to system fonts if unavailable.
