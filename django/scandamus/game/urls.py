from django.urls import path
from .views import TournamentView

urlpatterns = [
    path('tournament/', TournamentView.as_view()),
]
