from django.db import models


class Gallery(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    cover = models.ImageField(upload_to='gallery/covers/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    gallery = models.ForeignKey(
        Gallery,
        on_delete=models.CASCADE,
        related_name='images'
    )
    image = models.ImageField(upload_to='gallery/images/')

    def __str__(self):
        return f"{self.gallery.title} - {self.id}"