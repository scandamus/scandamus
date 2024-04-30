from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TournamentViewSet, MatchViewSet

router = DefaultRouter()
router.register(r'tournament', TournamentViewSet)
router.register(r'match', MatchViewSet)

urlpatterns = [
    path('', include(router.urls)),
]