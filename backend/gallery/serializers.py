from rest_framework import serializers
from .models import GalleryImage,Gallery

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

class GalleryDetailSerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True, read_only=True)

    class Meta:
        model = Gallery
        fields = [
            'id',
            'title',
            'description',
            'cover',
            'created_at',
            'images',
        ]
        
class GalleryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = [
            'id',
            'title',
            'description',
            'cover',
            'created_at',
        ]