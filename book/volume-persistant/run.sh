#!/usr/bin/env bash
kubectl create -f $(dirname $0)/1-vol.yaml
kubectl create -f $(dirname $0)/2-claim.yaml
kubectl create -f $(dirname $0)/3-pod.yaml