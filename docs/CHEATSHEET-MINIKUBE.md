## *Minikube* Cheatsheet

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