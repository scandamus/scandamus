from django.db import models


class Tournament(models.Model):
    name = models.CharField(max_length=50, verbose_name="トーナメント名")
    start = models.DateField(verbose_name="開始日")
    period = models.DateField(verbose_name="締切")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'トーナメント'
