from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField()
    description = models.TextField()
    dimensions = models.CharField(max_length=100)
    weight = models.FloatField()
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.name
