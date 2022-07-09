# [FiberKu.site](https://FiberKu.site)

### Repository ini adalah dokumentasi dari sebuah project Final Project Matakuliah Pemrograman WEB

Dibuat oleh Kelompok 2 dari 20-S1IF-07

-----------------------------
## Quick Start Guide Run AIO on single node server:
- _Make sure you have docker and docker-compose_
- _Run app_
```
docker-compose up -d
```


## Manual Deployment :

Pull / Import docker terlebih dahulu :

- _Site Utama_
```
git pull azizfath/fiberku
```

- _Site Admin_
```
git pull azizfath/fiberku_admin
```

- _RestAPI Backend_
```
git pull azizfath/fiberku_backend
```

> **Sebelum memulai docker, isi / perbaiki environment pada _docker-compose.yml_ backend / rest API**


Start Docker menggunakan Docker Compose atau Run docker secara manual dengan command :
```
docker run -d -p3000:3000 azizfath/fiberku_backend
docker run -d -p3001:3001 azizfath/fiberku
docker run -d -p3002:3002 azizfath/fiberku_admin
```

