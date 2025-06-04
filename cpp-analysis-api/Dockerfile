FROM gcc:11
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y cmake
RUN g++ -std=c++17 -I. -Inlohmann -o server main.cpp -lpthread
EXPOSE 5000
CMD ["./server"]
