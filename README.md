## start minikube

	minikube start --vm-driver=xhyve

## make symlink on minikube host to match examples
	
	minikube ssh
	ln -s $PATH_TO/k8s-cookbook /tmp/k8s-cookbook
	
	images in use were chosen to small
	 
	redis : https://github.com/sickp/docker-alpine-redis
		sickp/alpine-redis:3.2.7
		sickp/alpine-redis:3.2.8
	
	nodejs : https://github.com/mhart/alpine-node
	  mhart/alpine-node:7