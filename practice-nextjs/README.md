## OVERVIEW

- This is and web-application that manage the meetup event that have some basic features:
  - View all and detail Meetups.
  - Create new Meetup.
  - Update the Meetup.
  - Delete the Meetup.
  - Search Meetup by Name or the Speaker.
  - Sort by some Meetup properties.

## REQUIREMENT

- Read more detail requirement in [here](https://docs.google.com/document/d/1NY0HEDNPhS25FFTTsAQNTIZYBPOVZiPyjYCTUwaVMJc/edit?usp=sharing).

## TARGET

- Next.js basic.
- CSS utility library (Tailwind CSS or Bootstrap).
- React 18 (optional).

## TECHNICAL

- [React (18.2.0)](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Next.js](https://nextjs.org/) -  The React Framework for Production.
- [Storybook](https://storybook.js.org/) - an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- [Jest](https://jestjs.io/) - is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

## TIMELINE

- Estimate time: 8 days (2022/09/15 - 2022/09/26)

## TIME SIZE

- 1 developer:
  - [Tuan Ngo](tuan.ngo@asnet.com.vn)

## PRECONDITION

- [Node](https://nodejs.org/ru/blog/release/v16.13.1/) v16.13.1
- [Yarn](https://classic.yarnpkg.com/lang/en/) 1.22.19

### STEP TO STEP GUIDE TO INSTALL AND RUN

- Download source from repository:

```bash
$ git clone git@gitlab.asoft-python.com:tuan.ngo/react-training.git
```

- Change directory:

```bash
$ cd react-training
```

- Checkout branch

```bash
$ git checkout practice-nextjs
```

- Change directory:

```bash
$ cd practice-nextjs
```

- Install packages:

```bash
$ yarn install
```

- Run Storybook and you can view storybook at `http://localhost:6006/`

```bash
$ yarn storybook
```

- Run Json-server and you can access the server at `http://localhost:4000/`

```bash
$ yarn start-db
```

- Run App and you can use app at `http://localhost:3000/`

```bash
$ yarn dev
```

- Run App + Json-Server and you can use app at `http://localhost:3000/`, access the server at `http://localhost:4000/`

```bash
$ yarn run-app
```
