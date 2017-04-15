
## Running

```bash
./run.sh
```

## Testing setup is working 

```bash
# enter container
kubectl exec -it vol-per-pod /usr/local/bin/redis-cli
=> set hello world

# enter container again
kubectl exec -it vol-per-pod /usr/local/bin/redis-cli
=> get hello

# destroy/recreate pod
kubectl delete -f 3-pod.yaml
kubectl create -f 3-pod.yaml

# check saved state
kubectl exec -it vol-per-pod /usr/local/bin/redis-cli 
=> get hello
```
look for changes in ../_fixtures/data/redis