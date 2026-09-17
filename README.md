# Solquity Money Tracker

A small, local-first money tracker built as a public portfolio demo with synthetic starter data.

[Open the live demo](https://krishnakr2113.github.io/solquity-money-tracker/)

## Product idea

Money tracking should make records easier to understand without sending them somewhere else. This demo keeps its ledger in browser storage, calculates income, spending, available money and a savings rate, and makes every transaction editable by resetting or adding local entries.

## Privacy boundaries

- no account, backend, analytics or network API;
- no bank connection, notification access or financial advice;
- synthetic starter records only;
- data entered in the demo remains in this browser's local storage.

The private Solquity product has a broader feature set. This repository is independently written for public demonstration and contains no private financial records, workbook identifiers, OAuth configuration, signing material or private source code.

## Run and test

Serve the directory with any static file server, then open `index.html`.

```bash
npm test
```

See [PROVENANCE.md](PROVENANCE.md) for the asset register. Licensed under the [MIT License](LICENSE).
