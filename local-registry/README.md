> reference : https://mtpereira.com/local-development-k8s.html

**NOTE : This local registry ephemera**

minikube start --vm-driver xhyve --insecure-registry localhost:5000

kubectl apply -f local-registry.yml
