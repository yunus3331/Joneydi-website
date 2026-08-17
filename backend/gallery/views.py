from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Gallery
from .serializers import (
    GalleryListSerializer,
    GalleryDetailSerializer
)


@api_view(['GET'])
def gallery_list(request):
    galleries = Gallery.objects.all().order_by('-created_at')

    serializer = GalleryListSerializer(
        galleries,
        many=True
    )

    return Response(serializer.data)


@api_view(['GET'])
def gallery_detail(request, id):
    gallery = Gallery.objects.get(id=id)

    serializer = GalleryDetailSerializer(gallery)

    return Response(serializer.data)


@api_view(['GET'])
def gallery_home(request):
    galleries = Gallery.objects.all().order_by('-created_at')[:3]

    serializer = GalleryListSerializer(
        galleries,
        many=True
    )

    return Response(serializer.data)