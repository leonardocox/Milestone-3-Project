from django.shortcuts import render

# Create your views here.

# Going to take the request and then return the HTML to whatever made the request


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
