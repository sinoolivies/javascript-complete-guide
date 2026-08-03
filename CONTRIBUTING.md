# Contributing to JavaScript Complete Guide

Thank you for your interest in improving this resource! This repository is built for self-learners, educators, and developers. Every contribution — big or small — helps someone learn JavaScript better.

## Ways to Contribute

### Report Issues
Found an error, typo, or something unclear? Open an issue and include:
- The topic folder and file name affected
- A short description of the problem
- A suggested fix, if you have one

### Fix Errors and Improve Explanations
- Correct factual or code mistakes
- Rewrite unclear explanations to be more beginner-friendly
- Add missing edge cases or notes

### Add Content
- New examples for existing topics (in `examples.js`)
- New exercises or practical tasks (in `exercises.md` and `practical.md`)
- Additional entries in `common-mistakes.md`, `best-practices.md`, or `cheat-sheet.md`
- Translations of topics into other languages

### Review and Feedback
- Test exercises and solutions, then report any that are broken or misleading
- Suggest better solution approaches in `solutions.js`

## Getting Started

1. **Fork** the repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/javascript-complete-guide.git
   cd javascript-complete-guide
   ```
3. **Create a branch**:
   ```bash
   git checkout -b fix/descriptive-name
   ```
4. Make your changes and commit them with a clear message.
5. **Push** and open a **pull request**.

## Content Guidelines

- Follow the existing structure exactly — every topic folder contains the same 10 files.
- Use modern JavaScript (ES6+): `const`/`let`, arrow functions, template literals, destructuring.
- Add comments to every example in `examples.js` explaining what it does and why.
- Keep explanations beginner-friendly: define new terms, explain *why* a concept exists.
- Use consistent formatting: 2-space indentation, clear section headings, markdown code fences tagged with the language (e.g., ```js).
- Do not remove or renumber existing exercises; add new ones at the end of each level.

## Commit Message Style

Use concise, descriptive commit messages:

```
docs: add example for array destructuring
fix: correct typo in 04-control-flow theory
feat: add new intermediate exercises to 06-arrays
```

## Code of Conduct

Be respectful and constructive. This is a learning resource for people at all skill levels — never mock or belittle learners for asking questions.

## Getting Help

- Open an issue for any question about the structure or content.
- Suggest improvements in the Discussions tab.
