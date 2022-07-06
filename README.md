# FiberKu.site

Repository ini adalah dokumentasi dari sebuah project Final Project Matakuliah Pemrograman WEB

Dibuat oleh Kelompok 2 dari 20-S1IF-07

## Kunjungi WEB ini di https://fiberku.site

-----------------------------

## Cara deploy :

Pull / Import docker terlebih dahulu :

Site Utama
```
git pull azizfath/fiberku
```

Site Admin
```
git pull azizfath/fiberku_admin
```

RestAPI Backend
```
git pull azizfath/fiberku_backend
```

Sebelum memulai docker, isi / perbaiki environment pada backend / rest API

Start Docker menggunakan Docker Compose atau Run docker secara manual dengan command
```
docker run -d -p3000:3000 azizfath/fiberku_backend
docker run -d -p3001:3001 azizfath/fiberku
docker run -d -p3002:3002 azizfath/fiberku_admin
```
