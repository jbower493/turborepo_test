/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as MyServicesIndexImport } from './routes/my-services/index'
import { Route as MyServicesServiceIdIndexImport } from './routes/my-services/$serviceId/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MyServicesIndexRoute = MyServicesIndexImport.update({
  id: '/my-services/',
  path: '/my-services/',
  getParentRoute: () => rootRoute,
} as any)

const MyServicesServiceIdIndexRoute = MyServicesServiceIdIndexImport.update({
  id: '/my-services/$serviceId/',
  path: '/my-services/$serviceId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/my-services/': {
      id: '/my-services/'
      path: '/my-services'
      fullPath: '/my-services'
      preLoaderRoute: typeof MyServicesIndexImport
      parentRoute: typeof rootRoute
    }
    '/my-services/$serviceId/': {
      id: '/my-services/$serviceId/'
      path: '/my-services/$serviceId'
      fullPath: '/my-services/$serviceId'
      preLoaderRoute: typeof MyServicesServiceIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/my-services': typeof MyServicesIndexRoute
  '/my-services/$serviceId': typeof MyServicesServiceIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/my-services': typeof MyServicesIndexRoute
  '/my-services/$serviceId': typeof MyServicesServiceIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/my-services/': typeof MyServicesIndexRoute
  '/my-services/$serviceId/': typeof MyServicesServiceIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/my-services' | '/my-services/$serviceId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/my-services' | '/my-services/$serviceId'
  id: '__root__' | '/' | '/about' | '/my-services/' | '/my-services/$serviceId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  MyServicesIndexRoute: typeof MyServicesIndexRoute
  MyServicesServiceIdIndexRoute: typeof MyServicesServiceIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  MyServicesIndexRoute: MyServicesIndexRoute,
  MyServicesServiceIdIndexRoute: MyServicesServiceIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/my-services/",
        "/my-services/$serviceId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/my-services/": {
      "filePath": "my-services/index.tsx"
    },
    "/my-services/$serviceId/": {
      "filePath": "my-services/$serviceId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
