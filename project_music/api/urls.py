from django.urls import path
from .views import RoomView

# If url is blank, call main function.
urlpatterns = [
    path('home', RoomView.as_view())
]
