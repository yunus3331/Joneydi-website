from django.contrib import admin
from .models import News,Comment
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "show_in_hero",
        "show_in_newsdesk",
        "created_at",
    )

    list_filter = (
        "show_in_hero",
        "show_in_newsdesk",
    )
admin.site.register(Comment)
# Register your models here.
