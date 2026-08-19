from django.contrib import admin
from .models import News, Comment


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0
    readonly_fields = ("user", "created_at")


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

    inlines = [CommentInline]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "news",
        "created_at",
    )

    readonly_fields = ("news","user","created_at",)