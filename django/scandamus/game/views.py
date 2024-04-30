from rest_framework.viewsets import ModelViewSet
from .models import Tournament, Match
from .serializers import TournamentSerializer, MatchSerializer


class TournamentViewSet(ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer


class MatchViewSet(ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
