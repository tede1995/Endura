from django.contrib import admin
from django.conf.urls import include
from django.urls import path, include
from . import views as main

urlpatterns = [
    path('', main.index, name='index'),
]
