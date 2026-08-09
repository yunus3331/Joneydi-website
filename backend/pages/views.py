from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import About, ContactInfo
from .serializers import AboutSerializer, ContactSerializer


@api_view(['GET'])
def about(request):
    about = About.objects.first()

    if not about:
        return Response({
            'message': 'About information not found.'
        }, status=404)

    serializer = AboutSerializer(about)

    return Response(serializer.data)


@api_view(['GET'])
def contact(request):
    contact = ContactInfo.objects.first()

    if not contact:
        return Response({
            'message': 'Contact information not found.'
        }, status=404)

    serializer = ContactSerializer(contact)

    return Response(serializer.data)