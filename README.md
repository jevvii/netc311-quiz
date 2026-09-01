# NETC311: Introduction to Networks v7.0 (ITN) — Quiz & Reviewer Hub

Comprehensive interactive identification quiz player and study material generator for Cisco CCNA 1 Module 1 & Module 2.

## 🚀 Live Interactive Quizzes (GitHub Pages)
- **Portal Landing Page:** [https://jevvii.github.io/netc311-quiz/](https://jevvii.github.io/netc311-quiz/)
- **Module 1 Interactive Quiz (99 Questions):** [Networking Today](https://jevvii.github.io/netc311-quiz/module1.html)
- **Module 2 Interactive Quiz (104 Questions):** [Basic Switch & End Device Configuration](https://jevvii.github.io/netc311-quiz/module2.html)

## 📁 Repository Contents
- `public/`: Static web application deployed to GitHub Pages via GitHub Actions.
  - `index.html`: Main portal landing page.
  - `module1.html`: Standalone NotebookLM interactive quiz for Module 1.
  - `module2.html`: Standalone NotebookLM interactive quiz for Module 2.
  - `downloads/`: Offline printable PDF and Word questionnaires and answer keys.
- `module1_data.py` & `module2_data.py`: Raw question items, distractors, rationales, and curriculum topics.
- `generate_questionnaires.py`: Generates the formatted `.docx` and `.pdf` questionnaires.
- `build_notebooklm_quizzes.py`: Builds the NotebookLM interactive HTML, JSON, and Markdown files.

## 📝 Curriculum Coverage
- **Module 1 (99 Items):** Host roles, peer-to-peer networks, intermediary devices, network media, topologies, LAN vs WAN, internet connections, reliable networks (Fault Tolerance, Scalability, QoS, Security), modern trends (BYOD, Cloud, WISP), and IT certifications.
- **Module 2 (104 Items):** Cisco IOS navigation and command modes, syntax conventions, command-line shortcuts and hotkeys, device naming, password security, service password-encryption, banner MOTD, NVRAM vs RAM configuration files, IPv4/IPv6 addressing, and SVI setup.
