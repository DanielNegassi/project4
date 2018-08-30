from rest_framework import serializers
from .models import Category, Item


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, allow_null=True, read_only=True)
    class Meta:
    	model = Category
    	fields = ('name', 'photo_url','items','id')


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'photo_url', 'description', 'dimensions', 'weight', 'price','id','category')
