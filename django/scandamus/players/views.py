from django.shortcuts import render
from rest_framework import viewsets, renderers
from .models import DataPlayer
from .serializers import PlayerSerializer


# Create your views here.
class PlayersViewSet(viewsets.ModelViewSet):
    queryset = DataPlayer.objects.all()
    serializer_class = PlayerSerializer
    renderer_classes = [renderers.JSONRenderer]
    template_name = None
