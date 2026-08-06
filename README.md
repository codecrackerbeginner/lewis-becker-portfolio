# Lewis Becker — Portfolio-Website

Statische Ein-Seiten-Website auf Basis des Lebenslaufs. Kein Build-Schritt nötig (reines HTML/CSS/JS).

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder mit einem lokalen Server:

```bash
npx serve .
```

## Deployment auf Vercel

### Option A — ohne Git (am schnellsten)

```bash
npm install -g vercel
vercel
```

Den Anweisungen folgen (Projektnamen bestätigen, Ordner als Root übernehmen). Danach `vercel --prod` für die finale Produktions-URL.

### Option B — über GitHub (empfohlen für spätere Änderungen)

1. Neues GitHub-Repo erstellen und diesen Ordner pushen.
2. Auf [vercel.com](https://vercel.com) einloggen → „Add New… → Project" → Repo auswählen.
3. Framework Preset: **Other** (kein Build-Command nötig, Output-Directory: `.`).
4. „Deploy" klicken.

Nach dem Deploy erhältst du eine URL wie `lewis-becker.vercel.app`, die du direkt mit Recruitern teilen kannst. Optional lässt sich in den Vercel-Projekteinstellungen eine eigene Domain hinterlegen.

## Inhalte aktualisieren

- Texte/Struktur: `index.html`
- Design/Farben: `style.css` (Farben oben unter `:root` als CSS-Variablen)
- Foto/Lebenslauf-PDF: `assets/lewis-becker.png`, `assets/Lewis_Becker_CV.pdf`
