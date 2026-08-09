from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import images
from .serializers import ImagesSerializer


@api_view(['GET'])
def gallery_list(request):
    gallery = images.objects.all()
    serializer = ImagesSerializer(gallery, many=True)

    return Response(serializer.data)