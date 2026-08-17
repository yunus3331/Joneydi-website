from django.urls import path

from .views import (
    gallery_list,
    gallery_detail,
    gallery_home
)


urlpatterns = [
    path('', gallery_list),
    path('home/', gallery_home),
    path('<int:id>/', gallery_detail),
]