---
title: Getting started
pageTitle: GraphQLBlog - Level up your GraphQL skills.
description: Learn how to connect the dots in a GraphQL based architecture by building a headless blog engine.
---

Learn GraphQL by building a blogging engine. Create resolvers, write schemas, write queries, design the database, test and also deploy. {% .lead %}

{% video src="https://www.youtube.com/embed/BEfIcUzn67U" /%}

## Introduction

This modern GraphQL based stack will give you all the tools you need for your next project. GraphQL is the glue that ties every part of the stack together, thanks to it's typed nature and productive tooling.

You will create a headless blog that targets two types of users, editors and developers.

The first target user for the headless blog CMS are editors. They write markdown to create content. They register on the site and create, edit, and publish posts.

The other type of user GraphQLBlog has are developers. They consume the Posts GraphQL API to develop sites on top of the data. Authenticate against it with API Keys. Write GraphQL queries to fetch content. Send mutations to create, edit and update content.

Once you finish this course, you will know how to create full stack, modern GraphQL Apps and APIs using:

UI:

- [React](https://reactjs.org/) to build UI components
- [Apollo client](https://www.apollographql.com/docs/react/) to communicate with the GraphQL API
- [Tailwind](https://tailwindcss.com/) for styling
- [Codemirror](https://codemirror.net) to edit Markdown
- [Uppy](https://uppy.io/) for file uploads
- [React markdown](https://github.com/remarkjs/react-markdown) to preview content

API:

- [NextJs](https://nextjs.org/) as fullstack framework
- [GraphQL Yoga](https://www.graphql-yoga.com/)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)
- [Prisma](https://www.prisma.io/) for database
- [Transloadit](https://transloadit.com/) to store images
- [GQL IDE](https://gql.app/) to test GraphQL API
- [Docker](https://www.docker.com/) to run development services

Deployment:

- [Vercel](https://vercel.com/) to host the back and frontend
- [Heroku](https://heroku.com) to provision Postgres databases
- [Transloadit](https://transloadit.com/) to store images

## Prerequisites

You will need to have a basic understanding of web development, mainly Javascript, React and NodeJs.

## What you'll build

You will build a headless blog engine. [Check it out here](https://app.graphqlblog.com)!

Let's break down what that even means. A blog engine means it allows users to create and edit posts in markdown. Headless in this context means that it exposes a public GraphQL API that your API consumers can use along with their framework of choice to display the content.

You will learn how to develop it from scratch on your local machine, and also how to deploy it to a production ready environment.

## Architecture

The app is architected with three goals in mind: Developer experience, production readiness, and simplicity.

Fully typed from database, to API, to UI makes for a bug free, autocomplete ready development. Thanks to GraphQL, Typescript and Prisma.

Ready for production workloads since it's built on top of battle tested technologies like Postgres, NodeJs, and React.

Simplicity because it follows established and modern patterns like UI components and GraphQL on the API.

## About the author

Hi, I'm [Julian](https://twitter.com/_okjulian_) and I've been addicted to GraphQL since 2018. Love to get my hands dirty with production code, and share what I learn.

One of the first engineer hires at [HyGraph](https://hygraph.com), where I worked for 4 years. Wrote [Full Stack GraphQL](https://graphql.college/fullstack-graphql), taught [One Week GraphQL](https://oneweekgraphql.com/) along with [Jamie](https://twitter.com/notrab). Oh, I also co-hosted a talk with [Bruno](https://twitter.com/brunoscheufler) on [Testable GraphQL services](https://youtu.be/tRJhgPjdfFE) at GraphQLConf 2021.

Right now building [GQL IDE](https://gql.app), the next generation of GraphQL IDEs.
