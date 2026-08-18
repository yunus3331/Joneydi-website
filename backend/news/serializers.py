from rest_framework import serializers
from .models import News, Comment


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        source='user.username',
        read_only=True
    )

    class Meta:
        model = Comment
        fields = [
            'id',
            'username',
            'content',
            'created_at',
        ]
        read_only_fields = [
            'username',
            'created_at',
        ]