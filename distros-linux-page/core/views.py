from django.shortcuts import render


def home(request):
    return render(request, 'pages/index.html')


def login(request):
    return render(request, 'pages/login.html')


def register(request):
    return render(request, 'pages/register.html')
