# GarmentGo - Zielgenau helfen

Eine moderne, responsive Website für die Kleiderspende-Plattform GarmentGo e.V., die es Spender:innen ermöglicht, gezielt in Krisengebiete zu spenden.

## 🎯 Über das Projekt

GarmentGo e.V. ist eine gemeinnützige Organisation, die 2020 aus einer lokalen Initiative entstanden ist. Das Ziel: gut erhaltene Kleidung dorthin bringen, wo sie am dringendsten gebraucht wird – ohne Umwege. Die Website ermöglicht es Spender:innen, ihr Zielgebiet selbst zu wählen und zwischen Übergabe an der Geschäftsstelle oder Abholung per Sammelfahrzeug zu entscheiden.

**Hinweis:** Dieses Repository ist ein fiktives Projekt, erstellt im Rahmen einer universitären Fallstudie. Es dient ausschließlich Demonstrations- und Übungszwecken und steht in keinem realen Bezug zu tatsächlichen Organisationen oder Einsätzen.

## ✨ Features

### 🏠 **Hauptfunktionen**
- **Zielgerichtete Spenden**: Spender:innen wählen selbst das Krisengebiet
- **Flexible Übergabe**: Geschäftsstelle oder kostenlose Abholung im Einzugsgebiet
- **Transparente Prozesse**: Klare Kommunikation von der Registrierung bis zur Lieferung
- **Responsive Design**: Optimiert für alle Geräte

### 📱 **Technische Features**
- **Mehrstufiges Formular**: 6-Schritt-Spendenregistrierung mit Validierung
- **Interaktive Elemente**: FAQ-Sektion, Krisengebiete-Slider, animierte Zähler
- **Parallax-Effekte**: Moderne visuelle Gestaltung
- **Progressive Enhancement**: Funktioniert auch ohne JavaScript

## 🛠️ Technologie-Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Interaktivität**: Alpine.js
- **Icons**: Google Material Symbols
- **Architektur**: Komponentenbasierte Struktur mit modularen HTML-Komponenten

## 📁 Projektstruktur

```
GarmentGo/
├── index.html              # Startseite mit Hero-Section und FAQ
├── spende.html             # Mehrstufiges Spendenformular
├── about.html              # Über uns Seite
├── bestaetigung.html       # Bestätigungsseite nach Spende
├── faq.html                # Häufig gestellte Fragen
├── tracking.html           # Spendenverfolgung
├── app.js                  # Haupt-JavaScript für Komponenten-Loading
├── app.css                 # Custom CSS-Styles
├── components/             # Wiederverwendbare HTML-Komponenten
│   ├── header.html         # Navigation und Logo
│   ├── footer.html         # Footer mit Links und Kontakt
│   └── cookie-banner.html  # Cookie-Hinweis
├── rechtliches/            # Rechtliche Dokumente
│   ├── agb.html           # Allgemeine Geschäftsbedingungen
│   ├── datenschutz.html   # Datenschutzerklärung
│   └── impressum.html     # Impressum
└── assets/                # Bilder und Medien
    ├── garmentgo-logo.png
    ├── garmentgo-favicon.png
    └── [verschiedene Krisengebiete-Bilder]
```

## 🚀 Installation & Setup

### Voraussetzungen
- Webserver (Apache, Nginx, oder lokaler Server)
- Moderne Browser mit JavaScript-Unterstützung

### Lokale Entwicklung
```bash
# Projekt klonen oder herunterladen
cd GarmentGo

# Lokalen Server starten (z.B. mit Python)
python -m http.server 8000

# Oder mit Node.js
npx serve .

# Website öffnen
# http://localhost:8000
```

### Produktions-Deployment
1. Alle Dateien auf den Webserver hochladen
2. Sicherstellen, dass alle Pfade korrekt sind
3. HTTPS aktivieren für sichere Datenübertragung
4. Gzip-Kompression aktivieren für bessere Performance

## 📋 Konfiguration

### Geschäftsstelle anpassen
In `spende.html` (Zeile 230):
```javascript
office: { 
  name: 'Geschäftsstelle', 
  street: 'Musterstraße 1', 
  zip: '10117', 
  city: 'Berlin' 
}
```

### Einzugsgebiet konfigurieren
```javascript
zipPrefixLength: 2,  // PLZ-Prefix für Einzugsgebiet (z.B. "10" für Berlin)
```

### Krisengebiete erweitern
```javascript
crisisRegions: [
  { id: 'ukraine', name: 'Ukraine' },
  { id: 'gaza', name: 'Gaza' },
  // Weitere Gebiete hinzufügen...
]
```

## 🎨 Design-System

### Farben
- **Primär**: Emerald (Grün) - `#059669`
- **Sekundär**: Grau-Töne für neutrale Elemente
- **Akzent**: Rose für Fehlermeldungen

### Typografie
- **Schriftarten**: System-Fonts (San Francisco, Segoe UI, etc.)
- **Material Symbols**: Für Icons und visuelle Elemente

### Layout
- **Container**: Max-width 6xl (1152px)
- **Spacing**: Tailwind CSS Spacing-System
- **Breakpoints**: Mobile-first responsive Design

## 🔧 Entwicklung

### Code-Struktur
- **Modulare Komponenten**: Header, Footer als separate HTML-Dateien
- **Alpine.js**: Reaktive Datenbindung für Formulare
- **Vanilla JavaScript**: Keine externen Dependencies außer CDN-Libraries

### Performance-Optimierungen
- **CDN-Libraries**: Tailwind CSS und Alpine.js über CDN
- **Lazy Loading**: Komponenten werden dynamisch geladen
- **Minimale Dependencies**: Nur notwendige externe Ressourcen

## 📱 Browser-Unterstützung

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+

## 🤝 Beitragen

### Entwicklung
1. Fork des Repositories
2. Feature-Branch erstellen
3. Änderungen committen
4. Pull Request erstellen

### Bug-Reports
Bitte verwenden Sie das Issue-System für:
- Fehlerbeschreibungen
- Verbesserungsvorschläge
- Feature-Requests

## 📄 Lizenz

Dieses Projekt ist Teil der GarmentGo e.V. Organisation. Alle Rechte vorbehalten.

## 📞 Kontakt

**GarmentGo e.V.**
- Website: [garmentgo.de](https://garmentgo.de)
- E-Mail: info@garmentgo.de
- Adresse: Musterstraße 1, 10117 Berlin

---

*Entwickelt mit ❤️ für eine bessere Welt*
