# ReviewIII — Third Year Computer Science Study Reviewer & Quiz Portal

An Astro-powered static study portal and interactive quiz system for 3rd-year Computer Science subjects. Designed in an OLED pitch-black **Digital Sobriety Theme** with Google NotebookLM quiz players, printable PDF/Word questionnaires, and complete answer keys.

---

## 🚀 Live Interactive Quizzes (GitHub Pages)

- **Study Hub Portal:** [https://jevvii.github.io/reviewiii/](https://jevvii.github.io/reviewiii/)
- **NETC311 Module 1 (99 Items):** [Networking Today](https://jevvii.github.io/reviewiii/quizzes/netc311/module1.html)
- **NETC311 Module 2 (104 Items):** [Basic Switch & End Device Configuration](https://jevvii.github.io/reviewiii/quizzes/netc311/module2.html)
- **HMBY311 Module 1 (82 Items):** [The Scientific Method & Basic Chemistry](https://jevvii.github.io/reviewiii/quizzes/hmby311/module1.html)

---

## 📚 Subject Modules & Coverage

### 1. NETC311: Networking Technologies (Cisco CCNA v7.0 ITN)
- **Module 1 (99 Items):** Host roles, peer-to-peer networks, intermediary devices, media representations, topologies, LAN vs WAN, internet access technologies, reliable networks (Fault Tolerance, Scalability, QoS, Security), modern networking trends (BYOD, Cloud, WISP), and IT certifications.
- **Module 2 (104 Items):** Cisco IOS navigation and command modes (User EXEC, Privileged EXEC, Global Config), CLI shortcuts and hotkeys, device naming, password security, service password-encryption, banner MOTD, running-config vs startup-config, IPv4/IPv6 addressing, and Switch Virtual Interface (SVI) setup.

### 2. HMBY311: Human Biology
- **Module 1 (82 Items):** Phases of the scientific method, hypothesis falsifiability, controlled experiments (control vs experimental group), atomic structure (protons, neutrons, electrons), isotopes and radioisotopes, covalent vs ionic bonding, water properties (polarity, high heat capacity, heat of vaporization, hydrogen bonds), biomacromolecules (dehydration synthesis vs hydrolysis), carbohydrates (hexoses, pentoses, polysaccharides), lipids (saturated/unsaturated triglycerides, amphipathic phospholipids, steroids, cholesterol), proteins (20 amino acids, essential vs non-essential, 4 structural levels), enzymes (active sites, cofactors, coenzymes), and nucleic acids (DNA vs RNA structure, nucleotide components, gene translation).

### 3. Upcoming Year III Subjects
- **SOFE311:** Software Engineering
- **ITPM311:** IT Project Management
- **CSEL311:** CS Professional Elective
- **ATFL311:** Automata Theory & Formal Languages
- **SFCR311:** Systems Fundamentals & Cyber Risk

---

## 🛠️ Technology Stack

- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation)
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Styling:** Pitch Black Digital Sobriety Design System (`#000000` base, `#0a0a0a` cards, `#8a9a86` Sage Green, `#a89f91` Soft Clay)
- **Quiz Engine:** Google NotebookLM Web Player (with OLED dark mode overrides and popping answer borders)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 💻 Local Development

```bash
# Install dependencies
bun install

# Start local dev server
bun run dev

# Build production static site
bun run build

# Preview production build
bun run preview
```
