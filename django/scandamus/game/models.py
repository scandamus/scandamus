from django.db import models


class Tournament(models.Model):
    name = models.CharField(max_length=50, verbose_name="トーナメント名")
    start = models.DateTimeField(verbose_name="開始時間")
    period = models.DateTimeField(verbose_name="エントリー締切")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'トーナメント'
