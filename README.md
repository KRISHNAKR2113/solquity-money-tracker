# Solquity — Public Money Workspace

An interactive, local-first portfolio edition of Solquity built with synthetic financial records.

**[Open the live demo →](https://krishnakr2113.github.io/solquity-money-tracker/)**

## Explore the product

- monthly overview with income, spending, commitments, cash flow and categories;
- searchable transaction ledger with explicit income, spending and refund records;
- automatic payment-capture review where detected items do not count until approved;
- tracked accounts and calculated balances with statement comparison;
- category budgets and savings-goal progress;
- recurring payments, subscriptions and SIP schedules;
- Money Check presentation connecting a SIP plan, debit and purchase record;
- investment holdings, cost basis, dated values, allocation and gain calculations;
- masked demo cards linked to tracked accounts;
- EMI, affordability and planning calculations with assumptions visible;
- browser-local persistence and a full synthetic-data reset.

## Privacy boundaries

This public edition has no account, bank connection, notification permission, online AI, analytics or network API. It accepts only synthetic demo values and keeps them in this browser's local storage. It never asks for full card numbers, PINs, CVVs or personal financial documents.

The private Android product includes encrypted local storage, notification capture, optional Google Sheets exchange, protected card details, backups, investment imports and native device workflows. This public repository independently recreates the main product concepts without including personal records, OAuth configuration, signing material or private source code.

## Run and test

Serve the directory with any static file server, then open `index.html`.

```bash
npm test
```

See [PROVENANCE.md](PROVENANCE.md) for the asset register. Licensed under the [MIT License](LICENSE).
