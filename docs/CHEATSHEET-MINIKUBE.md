# *Minikube* Cheatsheet

## Start minikube


```bash
minikube start
```
or on a mac (does not work in the current version on my mac)

```bash
minikube start --vm-driver=xhyve
```

## Delete it again

```bash
minikube delete
```

## Make symlink on minikube host to match examples

PATH_TO is usually something like /Users/**$USERNAME**/src/

```bash
# enter the minikube VM
minikube ssh
# within the minikube shell
ln -s $PATH_TO/k8s-cookbook /tmp/k8s-cookbook
```
