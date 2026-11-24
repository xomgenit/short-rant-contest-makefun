# Angry Judge: The Short Rant Contest

[![Bounty](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/xomgenit/short-rant-contest-makefun/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/xomgenit/short-rant-contest-makefun/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) bounty on [make.fun](https://make.fun).

## The entry

> The office printer has one job. One. It has been 'warming up' since Tuesday, it has eaten three reams of paper, and it still prints my report in a font I have never seen, on a page I did not ask for, in a language I do not speak.

## How it works

`main.ts` assembles the rant from three fragments and writes it to `<outDir>/entry.txt` (where `outDir` is `MAKEFUN_OUTPUT_DIR` or `out`). It enforces the competition gate (1–400 characters) before writing.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
