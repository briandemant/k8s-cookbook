eval $(minikube docker-env)
docker build -t brde/env-dump-server:1 ./
docker run -d -p 8080:8080 brde/env-dump-server:1

kubectl run env-dump --image=brde/env-dump-server:1 --port=8080
kubectl expose deployment env-dump --type="LoadBalancer"

minikube service env-dump
