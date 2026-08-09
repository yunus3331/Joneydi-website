from django.contrib import admin
from news.models import News,Comment
from gallery.models import images
from pages.models import About,ContactInfo
# Register your models here.
admin.site.register(News)
admin.site.register(Comment)
admin.site.register(images)
admin.site.register(About)
admin.site.register(ContactInfo)