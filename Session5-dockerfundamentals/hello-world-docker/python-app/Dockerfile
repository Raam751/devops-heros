From python:3.12

WORKDIR /app 

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

# default command to trigger the application
CMD ["python", "app.py"]  
