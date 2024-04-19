from django.db import models


class DataPlayer(models.Model):
    playername = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
