from django.db import models

# Create your models here
class About(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
class ContactInfo(models.Model):
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)