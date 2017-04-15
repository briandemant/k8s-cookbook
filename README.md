# Kubernetes Cookbook

This is my collection of *"how to do ??"*, it is not (yet) ment to be **Good Practices** but just
 examples of how to make it work in a basic form.
 
## Getting started with *Minikube*

#### start minikube

	minikube start

or on a mac (does not work in the current version on my mac)

	minikube start --vm-driver=xhyve
	
##### Delete it again

	minikube delete
	
### make symlink on minikube host to match examples

PATH_TO is usually something like /Users/**$USERNAME**/src/
	
	minikube ssh
	#> ln -s $PATH_TO/k8s-cookbook /tmp/k8s-cookbook
	
### Images used

Images in use were chosen to be small (fast to download)
	 
	redis : https://github.com/sickp/docker-alpine-redis
		sickp/alpine-redis:3.2.7
		sickp/alpine-redis:3.2.8
	
	nodejs : https://github.com/mhart/alpine-node
	  mhart/alpine-node:7