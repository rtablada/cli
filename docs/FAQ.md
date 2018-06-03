The Sequelize Command Line Interface (CLI) Frequently Asked Question

## Initialize sequelize to create necessary files in the project
```
$ sequelize-cli init
```

## How can I generate a model?
Specify model name with `--name` argument. List of table fields can be passed with `--attributes` option
```
$ sequelize-cli model:create --name User --attributes name:string,state:boolean,birth:date,card:integer
```

## How can I create a migration?
Specify migration name with `--name` argument
```
$ sequelize-cli migration:create --name <migration_name>
```

## What is the command to execute all migrations?
```
$ sequelize-cli db:migrate
```
## How can I make a migrations rollback?
```
$ sequelize-cli db:migrate:undo:all
```

## How can I create a seeder?
Specify seeder name with `--name` argument
```
$ sequelize-cli seed:create --name <seeder_name>
```

## How can I run the seeders?
```
$ sequelize-cli db:seed:all
```

## How can I make the seeders rollback?
```
$ sequelize-cli db:seed:undo:all
```

