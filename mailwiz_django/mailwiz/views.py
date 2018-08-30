from django.shortcuts import render
from .models import Category, Item
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from .serializers import CategorySerializer, ItemSerializer

@method_decorator(csrf_exempt, name='dispatch')
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemList(generics.ListCreateAPIView):
  queryset = Item.objects.all().prefetch_related('category')
  serializer_class = ItemSerializer

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Item.objects.all().prefetch_related('category')
  serializer_class = ItemSerializer
