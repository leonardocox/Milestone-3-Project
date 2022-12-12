from django.urls import path
from .views import RoomView, CreateRoomView

# If url is blank, call main function.
urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view())
]
