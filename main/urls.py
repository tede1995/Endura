from django.contrib import admin
from django.conf.urls import include
from django.urls import path, include
from . import views as main
from django.views.generic import TemplateView

urlpatterns = [
    path('', main.IndexView.as_view(), name='index'),
]
