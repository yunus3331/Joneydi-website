from rest_framework import serializers
from .models import News, Comment

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'news', 'content', 'created_at']
        read_only_fields = ['user', 'news', 'created_at']