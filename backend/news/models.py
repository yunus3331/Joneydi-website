from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class News(models.Model):
    title=models.CharField(max_length=200)
    content=models.TextField()
    image=models.ImageField(upload_to='news/')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

class Comment(models.Model):
    news = models.ForeignKey(
        News,
        on_delete=models.CASCADE,
        related_name='comments'
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user"
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)