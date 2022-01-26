# cnapp_postgresql

## Overview

Sample Cloud Native application with PostgreSQL


## docker commands

### Run PostgreSQL on docker

`$ docker run -d --name postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres postgres` 

### Exec psql on running PostgreSQL docker container

`$ docker container exec -it postgres psql -h localhost -U postgres -d postgres`


### Exec SQL

`postgres=# create table if not exists items ( id varchar(50) not null primary key, name varchar(50) default '', price int default 0, created bigint default 0, updated bigint default 0 );`

`postgres=# \q`


## Environment values

- DATABASE_URL : URL connection string for PostgreSQL

- PGSSLMODE : 'no-verify'


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

