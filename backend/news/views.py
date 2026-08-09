from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import permission_classes

from .models import News, Comment
from .serializers import NewsSerializer, CommentSerializer


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

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def comments(request, news_id):

    news = News.objects.get(id=news_id)

    if request.method == 'GET':

        comments = Comment.objects.filter(news=news)

        serializer = CommentSerializer(
            comments,
            many=True
        )

        return Response(serializer.data)

    if request.method == 'POST':

        serializer = CommentSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save(
                user=request.user,
                news=news
            )

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )