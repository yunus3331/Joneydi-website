from django.urls import path
from .views import news_list,news_detail,comments,hero_news,newsdesk_news

urlpatterns = [
    path('', news_list),
    path('hero/' , hero_news),
    path('newsdesk/', newsdesk_news),
    path('<int:id>/', news_detail),
    path('<int:news_id>/comments/', comments),
]