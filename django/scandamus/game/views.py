from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Tournament
from .serializers import TournamentSerializer
from rest_framework import status


class TournamentView(APIView):
    def get(self, request, format=None):
        queryset = Tournament.objects.all()
        serializer = TournamentSerializer(queryset, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TournamentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)
# todo: ModelViewSetと比較
