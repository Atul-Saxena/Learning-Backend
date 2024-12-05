from django.db import models

# Create your models here.
class Questions(models.Model):
    question_text = models.CharField(max_length=300)
    pub_date = models.DateTimeField('Date published')

class Choices(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    choise_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
