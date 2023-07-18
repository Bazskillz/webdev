Running the mongodb docker


Build the dockerfile :

COMMAND

Run the dockerized container with a name 

sudo docker run -p 27017:27017 --name mongodb_container -v mongo-data:/data/db mongo-with-volume


Exec commands in the container example : 

sudo docker exec -it mongodb_container mongo


