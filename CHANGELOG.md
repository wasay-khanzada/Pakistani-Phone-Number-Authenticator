# Changelog

All notable changes to Pakistani Phone Number Authenticator will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Nothing yet — open an issue or PR to propose the next feature!

## [1.0.0] - 2026-07-24

### Added
- Initial release as a static `index.html` / `style.css` / `script.js` page.
- Live, keystroke-by-keystroke validation of Pakistani mobile numbers via a single regular expression (`/^03\d{9}$/`).
- Input normalization that strips non-digit characters and handles an optional leading `92` country code or `0` trunk prefix.
- Fixed `+92` country-code prefix displayed alongside the input field.
- Formatted display of valid numbers (`+92 3XX XXXXXXX`).
- Three-item live checklist (`Starts with 03`, `11 digits`, `Valid format`) reflecting each rule's pass/fail state.
- Specific, actionable error messages for wrong prefix, too few digits, and too many digits.
- Idle, valid, and invalid visual states across the input border, result panel, and icon.
- Responsive two-column hero layout with a Pakistan-flag accent motif.
- Fully client-side architecture — no backend, no network requests, no data collection.

[Unreleased]: https://github.com/wasay-khanzada/Pakistani-Phone-Number-Authenticator/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/wasay-khanzada/Pakistani-Phone-Number-Authenticator/releases/tag/v1.0.0
