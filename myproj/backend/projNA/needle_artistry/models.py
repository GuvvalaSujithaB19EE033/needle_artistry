from django.db import models

# Create your models here.
class Collection(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()

    def __str__(self):
        return self.title

class Blouse(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title
    
class Kurta(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class NightDress(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Frocks(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Skirt(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Salwar(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Lehenga(models.Model):
    title = models.CharField(max_length=200)
    image_link = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)  # Change to match your needs
    date = models.DateField()
    time = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name