from django.urls import path
from . import views

urlpatterns = [

    path('api/categories/', views.CategoryList.as_view(), name='category-list'),
    path('api/categories/<int:pk>', views.CategoryDetail.as_view(), name='category-detail'),
    path('api/items/', views.ItemList.as_view(), name='item-list'),
    path('api/items/<int:pk>', views.ItemDetail.as_view(), name='item-detail')
]
