eval $(minikube docker-env)
docker build -t brde/env-dump-server:v1 ./
docker run -d -p 8080:8080 brde/env-dump-server:v1

kubectl run env-dump --image=brde/env-dump-server:v1 --port=8080
kubectl expose deployment env-dump --type="LoadBalancer"

minikube service env-dump

# upgrade

change env-dump-server.js
> response.end("I changed!");

docker build -t brde/env-dump-server:v2 ./
kubectl edit deployment env-dump