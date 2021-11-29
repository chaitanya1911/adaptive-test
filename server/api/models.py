from django.db import models

class Question(models.Model):
    title = models.CharField(max_length=255)
    type = models.IntegerField()

class Option(models.Model):
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    marks = models.IntegerField()  
