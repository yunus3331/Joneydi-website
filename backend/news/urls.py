from django.urls import path
from .views import news_list,news_detail,comments

urlpatterns = [
    path('', news_list),
    path('<int:id>/', news_detail),
    path('<int:news_id>/comments/', comments),
]