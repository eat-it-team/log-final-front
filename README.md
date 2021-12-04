# log-final-front

### Основной стек технологий:
JavaScript, TypeScript, Vue.js 

HTML, Tailwind CSS

Docker, Kubernetes

Git, GitHub Actions.

### Демо
Демо сервиса доступно по адресу: http://45.134.255.154:30008/

### Среда запуска
требуется установленные пакеты docker, kubectl;

### Установка
```shell
git clone git@github.com:eat-it-team/log-final-front.git
cd log-final-front
```
Поменять если необходимо в .env адрес api

### Установка зависимостей проекта
```shell
yarn
```

### Запуск в режиме разработки
```shell
yarn dev
```
Фронт будет доступен по адресу http://localhost:3000/

### Запуск в production режиме
```shell
docker build -t log-final-front-app .
docker run -it -p 80:80 --rm --name log-final-front-app-1 log-final-front-app
```
Фронт будет доступен по адресу http://localhost/

### CI
сборка образа происходит с помошью GitHub Actions при вливании измененияй в ветку main.
```shell
kubectl apply -f ./manifests --kubeconfig={{путь до конфигурационного файла}}
```
