# from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse('Index')


def home(request):
    return HttpResponse('Home')


def cost(request):
    return HttpResponse('Cost')