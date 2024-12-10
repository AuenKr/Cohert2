#### Kubernetes Default Loadbalancer for a service run locally?

Q: currently I have 3 virtual machines (1 master kubernetes node and 2 slaves).

I want to create a service which encapsulates 3 replicas of my container.

I am curious if by default, in this local environment, when creating the service, kubernetes offers a load balancer by default, even though it was NOT specified in the service yaml file. Does it offer round robin by default ?


ans:

If your not on a supported cloud provider, your pretty much stuck with NodePort or ClusterIP for service types. A project I used when I was experimenting with a local kubernetes environment was Metallb. Metallb allows you to use the LoadBalancer service type and expose your service outside of the cluster network when running kubernetes outside a hosted platform, i.e., local test cluster.

To use Metallb, you must provide a pool of ip addresses the you can use on your pod network. First create a config map with your pod network ip range --

```
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.1.240-192.168.1.250

```


Then add that config map to your cluster.

`kubectl apply -f metallb-config.yaml`

Finally add the metallb controller to your cluster

`kubectl apply -f https://raw.githubusercontent.com/google/metallb/v0.8.3/manifests/metallb.yaml`

Now you should be able to expose your service.

`kubectl expose deployment name-of-deployment --type=LoadBalancer --name=name-of-service`