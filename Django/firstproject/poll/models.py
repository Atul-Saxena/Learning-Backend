import datetime

from django.utils import timezone

from django.db import models

# Create your models here.
class Questions(models.Model):
    question_text = models.CharField(max_length=300)
    pub_date = models.DateTimeField('Date published')

    def __str__(self):
        return self.question_text
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Choices(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200, default="")
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
