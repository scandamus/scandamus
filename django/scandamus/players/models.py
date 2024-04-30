from django.db import models


class Player(models.Model):
    playername = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
