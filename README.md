# Kubernetes Cookbook

This is my collection of *"how to do ??"*, it is not (yet) ment to be **Good Practices** but just
 examples of how to make it work in a basic form.
 
##

## Getting started

### install minikube and kubectrl

[Official Installation Guide](https://github.com/kubernetes/minikube/blob/master/README.md)

### Setup namespace 

	# create 
	./namespace/install.sh
	
	# use
	./namespace/use.sh
	
### Running the cookbooks

	# Read the Readme
	open https://github.com/briandemant/k8s-cookbook/blob/master/$EXAMPLE/README.md
	# install and run
	./$EXAMPLE/run.sh
	
### Cheatsheets

 * [Minikube](docs/CHEATSHEET-MINIKUBE.md)
 * [Kubectl](docs/CHEATSHEET-KUBECTL.md)

### Images used

Images in use were chosen to be small (fast to download)
	 
	redis : https://github.com/sickp/docker-alpine-redis
		sickp/alpine-redis:3.2.7
		sickp/alpine-redis:3.2.8
	
	nodejs : https://github.com/mhart/alpine-node
	  mhart/alpine-node:7