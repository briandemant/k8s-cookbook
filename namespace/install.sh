#!/usr/bin/env bash
kubectl create -f $(dirname $0)/namespace.yaml 
kubectl config set-context k8s-mini --namespace=k8s-cookbook --user=minikube --cluster=minikube
$(dirname $0)/use.sh