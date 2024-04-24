from django.contrib.auth.models import User
from rest_framework import serializers
from .models import DataPlayer


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataPlayer
        fields = ['id', 'playername', 'created_at']
