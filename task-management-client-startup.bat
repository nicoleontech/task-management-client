docker build . -t task-management-client:latest
        
docker run -d -p 4200:4200 task-management-client:latest