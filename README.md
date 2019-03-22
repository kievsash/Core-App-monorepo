# CoreApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Main project structure

- You have one **CoreApp**
    * made with `ng new CoreApp`.


- You have 2 sub-applications (app1 and app2) 

    * `ng generate application app1`
    * `ng g application app2`)
- You have library admin-lib 

    * `ng g lib admin-lib`

- **App1** and **App2** can be started and developed independently:
    * `npm run start:app1` and `npm run start:app2`
    * `npm run test:app1` and `npm run test:app2`
    * `npm run lint:app1` and `npm run lint:app2`
    * `npm run build:app1` and `npm run build:app2`

- Each of **App1** and **App2** has its own _ngRx_ instance, so you can use _Redux-Dev-Tools_ to observe their Stores.

- **admin-lib** is a components lib and can be build and used in any of apps (_CoreApp_, _app1_ and _app2_)

- **CoreApp** includes **App1** and **App2** as lazy-loaded routing modules. 
    * ngRx feature modules of both app1 and app2 are attached to CoreApp Store.
    * You can send actions from CoreApp to change App1 and App3 feature branches values.

## Implementation details

To implement this I each sub-application (app1 and app2) has:
 - **app.module.ts** - for independent development
 - **app.module-export.ts** - to be used when included in Core-App

Mostly they should be identical except **app.module-export.ts** has such app.module-export.ts:
- **RouterModule.forRoot** is changed to **RouterModule.forChild**
- **StoreModule.forRoot** is removed (but feature moduls should stay)
- **StoreDevtoolsModule** is removed as well

```Actually these two files has be easily merged (todo for the future), modules can be attached and detached just by using some CoreApp environment.ts variable```
## Installation notes:
* Clone github repo 
* `npm install OR npm i`
* `npm run start:Core` (or any other command from package.json 'scripts' section)

## Animated demo
1. Project structure
![](CoreApp-project-structure.gif)

2. Starting **App1**, **App2** and **CoreApp**
![](CoreApp-start_apps_separately.gif)
