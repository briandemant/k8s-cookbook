
#running

kubectl create -f 1-vol.yaml
kubectl create -f 2-claim.yaml
kubectl create -f 3-pod.yaml

testing redis 

kubectl exec -it vol-per-pod /usr/local/bin/redis-cli
> set hello world

kubectl exec -it vol-per-pod /usr/local/bin/redis-cli
> get hello


kubectl delete -f 3-pod.yaml
kubectl create -f 3-pod.yaml

kubectl exec -it vol-per-pod /usr/local/bin/redis-cli
> get hello

look for changes in ../_fixtures/data/redis