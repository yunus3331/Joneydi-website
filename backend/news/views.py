from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import News
from .serializers import NewsSerializer


@api_view(['GET'])
def news_list(request):
    news = News.objects.all()
    serializer = NewsSerializer(news, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def news_detail(request, id):
    news = News.objects.get(id=id)
    serializer = NewsSerializer(news)

    return Response(serializer.data)