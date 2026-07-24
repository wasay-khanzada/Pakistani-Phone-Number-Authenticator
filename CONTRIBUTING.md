# Contributing to Pakistani Phone Number Authenticator

Thanks for your interest in contributing! 🎉 This is a small, focused validation tool, so contributions of any size — bug fixes, edge-case handling, accessibility improvements — are welcome.

## Code of Conduct

Be respectful and constructive. This project welcomes contributors of all experience levels. Disrespectful, discriminatory, or harassing behavior will not be tolerated.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before opening an issue:
- Check the [existing issues](https://github.com/wasay-khanzada/Pakistani-Phone-Number-Authenticator/issues) to avoid duplicates.
- Confirm the bug reproduces on the latest version of `index.html`.

Please include:
- A clear, descriptive title.
- The exact input you typed and what result you expected vs. what you got.
- Browser and OS version.
- A screenshot, if relevant.

### 💡 Suggesting Enhancements

Ideas are welcome as GitHub issues. Please include:
- What problem the enhancement solves.
- Why it benefits most users of the tool.
- Any relevant examples (e.g. a number format that currently isn't handled correctly).

Some areas that are especially good candidates for contribution:
- Support for validating landline numbers, not just mobile.
- Carrier detection (Jazz, Zong, Ufone, Telenor, etc.) based on prefix.
- Copy-to-clipboard for the formatted, valid number.
- Improved accessibility (screen-reader announcements for state changes).

### 🔧 Pull Requests

1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/short-description
   ```
2. **Keep it dependency-free.** This project intentionally ships as plain `index.html`, `style.css`, and `script.js` with no build tools or libraries. Please discuss any new dependency in an issue first.
3. **Keep validation logic centralized.** The core check should remain a single, clear regular expression (`PK_LOCAL_FORMAT`) rather than scattered ad-hoc conditionals. If you need to add a new rule, extend the normalization/validation functions rather than duplicating logic.
4. **Preserve the privacy model.** Validation must stay entirely client-side — never send the entered number to a server or third-party service.
5. **Test manually** with a range of inputs: a fully valid number, missing digits, extra digits, with and without `+92`/`92`/leading `0`, and non-numeric characters.
6. **Update documentation.** If your change affects behavior, update the [README](README.md) and add an entry to [CHANGELOG.md](CHANGELOG.md) under "Unreleased".
7. Submit your pull request with a clear description of the *why* behind the change, and link any related issues.

## Development Setup

No installation required:

```bash
git clone https://github.com/wasay-khanzada/Pakistani-Phone-Number-Authenticator.git
cd Pakistani-Phone-Number-Authenticator
open index.html
```

For live-reload during development, any static file server works, e.g.:

```bash
npx serve .
```

## Style Guidelines

- Use 2-space indentation, matching the current files.
- Keep functions small and focused (see `toLocalNumber`, `renderResult`, and `setCheck` as examples).
- Keep UI copy clear and specific about what's wrong (e.g. "Enter 3 more digits to complete the number"), consistent with the existing tone.
- Reuse the existing CSS custom properties (`--accent-green`, `--error`, etc.) rather than hardcoding new colors.

## Questions?

Open a [discussion or issue](https://github.com/wasay-khanzada/Pakistani-Phone-Number-Authenticator/issues) — happy to help.
