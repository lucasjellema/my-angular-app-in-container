# my-angular-app-in-container
Simplest Angular Web Application ever - packaged into a runnable (and running) container


## To pack into a container:

### Install buildpacks cli 
sudo add-apt-repository ppa:cncf-buildpacks/pack-cli
sudo apt-get update
sudo apt-get install pack-cli

###  allow access to the Docker daemon
chmod a+w /var/run/docker.sock

### generate container 
pack build my-angular-app --builder gcr.io/buildpacks/builder:v1
